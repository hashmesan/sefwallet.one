import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import React from "react";
import { Container, AppShell, Anchor, Header, Navbar, Space, Center, Pagination, Table, Text,Image, SimpleGrid, Title, Col, Card, Grid, Group } from '@mantine/core';
import {useLocation} from "react-router-dom";
import GuardianOps from "./guardian_ops";

import { InjectedConnector } from '@web3-react/injected-connector'
import { OneWalletConnector } from '@harmony-react/onewallet-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'
import { TrezorConnector } from '@web3-react/trezor-connector'

const CHAIN_ID = 1666600000
const POLLING_INTERVAL = 3000
const RPC_URL = "https://api.s0.t.hmny.io"
export const injected = new InjectedConnector({ supportedChainIds: [CHAIN_ID] })
export const onewallet = new OneWalletConnector({ chainId: 1 })
export const ledger = new LedgerConnector({ chainId: CHAIN_ID, url: RPC_URL, pollingInterval: POLLING_INTERVAL })

export const trezor = new TrezorConnector({
  chainId: CHAIN_ID,
  url: RPC_URL,
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'security@sefwallet.one',
  manifestAppUrl: 'https://sefwallet.one'
})


function WalletButton({image, name, ...props}) {

    return <Card shadow="sm" padding="lg" style={{marginRight: 40}} {...props}>
        <Center><Image radius="lg" src={image} height={200} width={200}/></Center>
        <Title order={3} align="center">{name}</Title>
    </Card>
}

function WalletAuth({}) {
    const { active, error, account, activate, library, chainId, deactivate } = useWeb3React()
    const name = new URLSearchParams(window.location.search).get('name');
  
    React.useEffect(() => {
        injected.isAuthorized().then((isAuthorized: boolean) => {
          if (isAuthorized) {
            activate(injected, undefined, true).catch(() => {
            //   setTried(true)
            })
          } else {
            // setTried(true)
          }
        })
      }, []) // intentionally only running on mount (make sure it's only mounted once :))
      
    console.log(active, error, account)
    return !active ? (<React.Fragment>
            <Title order={2}>Connect Wallet</Title>
            <Text color="gray">Click on either wallet to connect your wallet as a guardian.</Text>
            <Space h="md" />
            <SimpleGrid cols={2} spacing="md">
                <WalletButton image={"images/metamask.png"} name="Metamask" onClick={()=>{
                            activate(injected);  
                            }}/>
                <WalletButton image={"images/harmony-wallet-blue.png"} name="Harmony" onClick={()=>{
                    activate(onewallet);
                }}/>
                <WalletButton image={"images/ledger.svg"} name="Ledger" onClick={()=>{
                    activate(ledger);
                }}/>
                <WalletButton image={"images/trezor.svg"} name="Trezor" onClick={()=>{
                    activate(trezor);
                }}/>
            </SimpleGrid>
            </React.Fragment>)
                : <GuardianOps/>
    
}

export default function() {
    return <WalletAuth/>
}