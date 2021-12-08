import React from "react";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Alert, Container, AppShell, Header, Button, Navbar, Space, Center, Pagination, Table, Text,Image, SimpleGrid, Title, Col, Card, Grid, Group } from '@mantine/core';
import HarmonyClient, { decodeSmartVaultFunction } from "@hashmesan/smartvault/lib/harmony_client";
import { ethers } from 'ethers';
const TOTPWallet = require("@hashmesan/smartvault/build/contracts/TOTPWallet.json");
const Web3 = require('web3');
import { Contract } from '@ethersproject/contracts'
import { LoadingOverlay } from '@mantine/core';
import { OneWalletConnector } from '@harmony-react/onewallet-connector'
import { CrossCircledIcon} from '@radix-ui/react-icons'

export default function GuardianOps({}) {
    const [info, setInfo] = React.useState(null);
    const [wallet, setWallet] = React.useState(null);
    const [pageError, setPageError] = React.useState(null);
    const [actions, setActions] = React.useState([]);
    const [visible, setVisible] = React.useState(false);

    const { connector, active, error, account, activate, library, chainId, deactivate } = useWeb3React()
    const name = new URLSearchParams(window.location.search).get('name');
    const client = new HarmonyClient("https://api.s0.t.hmny.io", "0x3fa4135B88cE1035Fed373F0801118a3340B37e7");

    console.log("library", library, connector, connector instanceof OneWalletConnector);
    
    function loadPage() {
        setVisible(false);
        client.isNameAvailable(name + ".sefwallet.one", 100).then(e=>{
            if(e.address != ethers.constants.AddressZero) {
                return client.getSmartVaultInfo(e.address).then(info=>{
                    console.log(e.address, info);

                    if(info.codeVersion <=2) {
                        setPageError("Requires wallet >= 2. Need to upgrade wallet first!")
                        setVisible(true);
                        return;
                    }
                    console.log(info.guardians,info.guardians.includes(account))
                    if(!info.guardians.includes(account)) {
                        setPageError("This wallet is not a guardian.")
                        setVisible(true);
                        return;
                    }
                    var pendingActions = [];
                    if(info.pendingRecovery.secretHash != '0x0000000000000000000000000000000000000000000000000000000000000000') {
                        pendingActions.push({
                            wallet: e.address, 
                            type: "recovery",
                            description: "Recovery wallet: " + info.pendingRecovery.secretHash.substr(0,5) + "..." + info.pendingRecovery.secretHash.substr(-4),
                            data: info.pendingRecovery,
                            signed: info.pendingRecovery.guardiansApproved.includes(account)
                        })
                    }

                    client.web3.eth.getBlock("latest").then(block =>{
                        console.log("block", block);
                        if(info.session.expires > block.timestamp && info.session.active == false) 
                        {
                            pendingActions.push({
                                wallet: e.address, 
                                type: "session",
                                description: `New Session, expires: ${info.session.expires}`,
                                data: info.session,
                                signed: info.session.guardiansApproved.includes(account)
                            })
                        }
                        setActions(pendingActions);
                        setVisible(true);
                    });
                })
            } else {
                setPageError("Sef wallet " + name + " not found");
                setVisible(true);
            }
        }).catch(ex=>{
            console.log(ex);
            setPageError(ex.message);
            setVisible(true);
        })
    }
    React.useEffect(loadPage,[]);

    function submitApprove(wallet, dataHash) {
        if(connector instanceof OneWalletConnector) {
            const contractInstance = library.contracts.createContract(TOTPWallet.abi, wallet);
            console.log("dataHash", dataHash, connector.bech32Address);

            connector.attachToContract(contractInstance).then(signedInstance => {
                signedInstance.methods.guardianApprove(dataHash).send({
                    gasPrice: 2000000000,
                    gasLimit: 550000,
                    value: '0',
                }).then(tx=>{
                    console.log("success", tx);
                    alert("Successful!");
                    setVisible(false);
                    setTimeout(loadPage, 5000);
                })
                .catch(ex=>{
                    console.log("ex", ex)
                    alert("Exception: " + ex)
                });    
            })

        } else {
            let contract = new Contract(wallet, TOTPWallet.abi, library);
            const signer = contract.connect(library.getSigner());
            console.log(signer, dataHash);
            signer.guardianApprove(dataHash).then(tx=>{
                console.log("success", tx);
                alert("Successful! hash=" + tx.hash);
                setVisible(false);
                setTimeout(loadPage, 5000);
            }).catch(ex=>{
                console.log("ex", ex)
                alert("Exception: " + ex.message + " " + (ex.data?.message||""))
            })    
        }
    }
    const rows = actions.map((element, index) => (
        <tr key={index}>
          <td><Text size="md">{element.description}</Text></td>
          <td>{element.signed ? "Approved" : <Button onClick={()=>{

            const iface = new ethers.utils.Interface(TOTPWallet.abi);
            if(element.type == "session") {
                var dataHash = iface.functions["startSession"].encode([element.data.expires]);
                submitApprove(element.wallet, dataHash);
            } else {
                var dataHash = iface.functions["startRecoverCommit"].encode([element.data.secretHash, element.data.dataHash]);
                submitApprove(element.wallet, dataHash);
            }

          }}>Approve</Button>}</td>
        </tr>));

    return <Card shadow="md" padding="xl" radius="xl">
            <LoadingOverlay visible={!visible} />
        <Title>Requires Approval</Title>
            {pageError &&<Alert
            color="red"
            title={pageError}
            icon={<CrossCircledIcon  />}
            withCloseButton
            closeButtonLabel="Dismiss"
        >{""}</Alert>}

        <Space h="md" />
        <Table>
        <thead>
            <tr>
            <th>Description</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>{actions.length == 0 ? "No actions required": rows}</tbody>
        </Table>        
    </Card>
}