import React from "react";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Container, AppShell, Header, Button, Navbar, Space, Center, Pagination, Table, Text,Image, SimpleGrid, Title, Col, Card, Grid, Group } from '@mantine/core';
import HarmonyClient, { decodeSmartVaultFunction } from "@hashmesan/smartvault/lib/harmony_client";
const ethers = require("ethers");


export default function GuardianOps({}) {
    const [info, setInfo] = React.useState(null);
    const [wallet, setWallet] = React.useState(null);
    const [pageError, setPageError] = React.useState(null);

    const { active, error, account, activate, library, chainId, deactivate } = useWeb3React()
    const name = new URLSearchParams(window.location.search).get('name');
    const client = new HarmonyClient("https://api.s0.t.hmny.io", "0x3fa4135B88cE1035Fed373F0801118a3340B37e7");

    React.useEffect(()=>{
        client.isNameAvailable(name + ".sefwallet.one", 100).then(e=>{
            console.log(e);
            if(e.address != ethers.constants.AddressZero) {
                return client.getSmartVaultInfo(e.address).then(info=>{
                    console.log(info);
                })
            } else {
                setPageError("Sef wallet " + name + " not found");
            }
        }).catch(ex=>{
            console.log(ex);
            setPageError(ex.message);
        })

    },[]);

    const actions = [{description:"Start Session"}]
    const rows = actions.map((element, index) => (
        <tr key={index}>
          <td>{element.description}</td>
          <td><Button>Approve</Button></td>
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
        <tbody>{rows}</tbody>
        </Table>        
    </Card>
}