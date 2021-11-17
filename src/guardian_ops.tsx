import React from "react";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Container, AppShell, Header, Button, Navbar, Space, Center, Pagination, Table, Text,Image, SimpleGrid, Title, Col, Card, Grid, Group } from '@mantine/core';
import HarmonyClient, { decodeSmartVaultFunction } from "@hashmesan/smartvault/lib/harmony_client";
import { ethers } from 'ethers';
const TOTPWallet = require("@hashmesan/smartvault/build/contracts/TOTPWallet.json");
const Web3 = require('web3');
import { Contract } from '@ethersproject/contracts'


export default function GuardianOps({}) {
    const [info, setInfo] = React.useState(null);
    const [wallet, setWallet] = React.useState(null);
    const [pageError, setPageError] = React.useState(null);
    const [actions, setActions] = React.useState([]);

    const { active, error, account, activate, library, chainId, deactivate } = useWeb3React()
    const name = new URLSearchParams(window.location.search).get('name');
    const client = new HarmonyClient("https://api.s0.t.hmny.io", "0x3fa4135B88cE1035Fed373F0801118a3340B37e7");

    function loadPage() {
        client.isNameAvailable(name + ".sefwallet.one", 100).then(e=>{
            console.log(e);
            if(e.address != ethers.constants.AddressZero) {
                return client.getSmartVaultInfo(e.address).then(info=>{
                    console.log(info);
                    var pendingActions = [];
                    if(info.pendingRecovery.secretHash != '0x0000000000000000000000000000000000000000000000000000000000000000') {
                        pendingActions.push({
                            wallet: e.address, 
                            type: "recovery",
                            description: "Recovery wallet: " + info.pendingRecovery.secretHash,
                            data: info.pendingRecovery,
                            signed: account in info.pendingRecovery.guardiansApproved
                        })
                    }

                    library.getBlock("latest").then(block =>{
                        console.log("block", block);
                        if(info.session.expires > block.timestamp && info.session.active == false) 
                        {
                            pendingActions.push({
                                wallet: e.address, 
                                type: "session",
                                description: `New Session, expires: ${info.session.expires} active: ${info.session.active}`,
                                data: info.session,
                                signed: account in info.session.guardiansApproved
                            })
                            setActions(pendingActions);
                        }
                    });
                })
            } else {
                setPageError("Sef wallet " + name + " not found");
            }
        }).catch(ex=>{
            console.log(ex);
            setPageError(ex.message);
        })
    }
    React.useEffect(loadPage,[]);

    const rows = actions.map((element, index) => (
        <tr key={index}>
          <td><Text size="md">{element.description}</Text></td>
          <td>{element.signed ? "Approved" : <Button onClick={()=>{
              
            let contract = new Contract(element.wallet, TOTPWallet.abi, library);
            const signer = contract.connect(library.getSigner());

            var dataHash = contract.interface.encodeFunctionData("startSession", [element.data.expires]);
            console.log(signer, dataHash);
            signer.guardianApprove(dataHash).then(e=>{
                console.log("success", e);
                loadPage();
            }).catch(ex=>{
                console.log("ex", ex)
                alert("Exception: " + ex.message + " " + ex.data.message)
            })

          }}>Approve</Button>}</td>
        </tr>));

    return <Card>
        <div>Connected! {account} target: {name}</div>
        {pageError && <div>{pageError}</div>}
        <Text size="xl">Requires Approval</Text>
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