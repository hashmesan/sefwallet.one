import Web3 from "web3";
import HarmonyClient, { decodeSmartVaultFunction } from "@hashmesan/smartvault/lib/harmony_client";
var UniswapFactory = require("@venomswap/core/build/IUniswapV2Factory.json");
import { GraphQLClient, request, gql } from 'graphql-request'
import lodash from "lodash";
import web3utils from 'web3-utils';
import { TokenAmount, Token } from '@venomswap/sdk';

// const factory = "0xc35DADB65012eC5796536bD9864eD8773aBc74C4";

// export default class Caculate {
//     web3: Web3;
//     constructor() {
//         var client = new HarmonyClient("https://api.s0.t.hmny.io","0x3fa4135B88cE1035Fed373F0801118a3340B37e7");
//         this.web3 = client.web3;
//     }    
//     async getSushiFactories() {
//         const factoryContract = new this.web3.eth.Contract(
//             UniswapFactory.abi,
//             factory
//         );
        
//         const len = await factoryContract.methods.allPairsLength().call();
//         console.log("len=", len);
//         const pairs = await factoryContract.methods.allPairs(len-1).call();
//         return pairs;
//     }
// }

export default class Caculate {
    async getSushiFactories() {
		let result = await request("https://sushi.graph.t.hmny.io/subgraphs/name/sushiswap/harmony-exchange",
			gql`{
                bundles {
					id,
					ethPrice
				}
                pairs(first: 500){
                  name
                  id
                  token0 {
                    symbol
                    id
                    derivedETH
                    decimals
                  }
                  token1 {
                    id
                    symbol
                    derivedETH
                    decimals
                  }
                }
              }`
		);
        return result;
    }
    async getTokens() {
		let result = await request("https://sushi.graph.t.hmny.io/subgraphs/name/sushiswap/harmony-exchange",
			gql`{
                bundles {
					id,
					ethPrice
				}
                tokens(orderBy:volumeUSD, orderDirection:desc, where: {derivedETH_gt: 0}) {
                    symbol
                    id
                    name
                    decimals
                    derivedETH
                  }
              }`
		);
        return result;
    }
    async getTransfers() {
        let result = await request("https://graph.sefwallet.one:9443/subgraphs/name/sefwallet-subgraph",
                gql`{
                    summaries {
                        totalDeposits
                        totalWithdrawals
                    }
                    wallets {
                        id
                    }
                    transferSummaries {
                        id
                        value
                        token
                        address
                      }
                }`
            );
        return result;
    }

    async computeAll() {
        const transferData = await this.getTransfers();
        const tokenData = await this.getTokens();
        const tokens = lodash.keyBy(tokenData.tokens, 'id');
        const onePrice = Number(tokenData.bundles[0].ethPrice);
        const wallets = lodash.keyBy(transferData.wallets, 'id');
        const totalBalance = Number(transferData.summaries[0].totalDeposits) - transferData.summaries[0].totalWithdrawals;
        console.log("XX", totalBalance, totalBalance*Number(onePrice));
        const { transferEnriched, totalUSD } = this.computeTokenBalance(transferData.transferSummaries, tokens, wallets, onePrice)
        const totalLocked = await this.computeLockedDefi(transferData);
        
        return {
            balance: totalUSD,
            totalLocked: totalLocked
        }
    }

    computeTokenBalance(transfers, tokens, wallets, onePrice) {
        console.log("XX", wallets);
        const transferEnriched = transfers.map(transfer => {
            var found = tokens[transfer.token.toLowerCase()];
            if(found) {
                var tokenA = new Token(1, transfer.token, parseInt(found.decimals), "", "");
                var tokenAmount = new TokenAmount(tokenA, transfer.value);
                var valueUSD = Number(tokenAmount.toFixed(5)) * Number(found.derivedETH) * onePrice;
                transfer.valueUSD = valueUSD;
                transfer.amount = tokenAmount.toFixed(5);
                transfer.tokenData = found;
            }
            return transfer;
        });

        const totalUSD = transferEnriched.filter(e=> (e.address in wallets)).reduce((prev: number, cur: any) =>{
            return prev + (cur.valueUSD||0);
        }, Number(0));

        console.log("XXComputeBalance", transferEnriched, totalUSD);

        return {
            transferEnriched, 
            totalUSD
        }
    }

    async computeLockedDefi(transferData) {
        const pairs = await this.getSushiFactories();
        const transfers = transferData.transferSummaries;
        const pairMap = lodash.keyBy(pairs.pairs, "id");
        console.log("XXPair=",pairMap, "ONE price=", pairs, pairs.bundles[0].ethPrice);
        console.log("XXTransfer=", transfers);
        var tokensLocked = {};

        const transferEnriched = transfers.map(transfer => {
            var found = pairMap[transfer.address.toLowerCase()];
            console.log(transfer);
            if(found) {
            transfer.inSushi = true;
              if(!(transfer.token in tokensLocked)) {
                tokensLocked[transfer.token] = { 
                    value: web3utils.toBN(0),
                    token: found.token0.id == transfer.address ? found.token0 : found.token1
                }
              }
              var token = tokensLocked[transfer.token];
              var val = tokensLocked[transfer.token].value;
              tokensLocked[transfer.token].value = val.add(web3utils.toBN(transfer.value));
              var tokenA = new Token(1, transfer.token, parseInt(token.token.decimals), "", "");
              var tokenAmount = new TokenAmount(tokenA, tokensLocked[transfer.token].value);
              tokensLocked[transfer.token].valueDec =  tokenAmount.toFixed(5);
              tokensLocked[transfer.token].valueUSD = Number(tokenAmount.toFixed(5)) * Number(token.token.derivedETH) * Number(pairs.bundles[0].ethPrice);
            } else {
              transfer.inSushi = false;
            }
            return transfer;
        })
        const totalLocked = Object.values(tokensLocked).reduce((prev: number, cur: any) =>{
            return prev + cur.valueUSD;
        }, Number(0));

        console.log("XX1", transferEnriched);
        console.log("XX2", tokensLocked);
        console.log("XXtotal locked", totalLocked);

        return totalLocked;
    }


}