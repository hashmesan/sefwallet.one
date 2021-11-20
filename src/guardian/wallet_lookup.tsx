import React from "react";
import { Alert, Container, AppShell, Header, Button, Navbar, Space, Center, Pagination, Table, Text,Image, SimpleGrid, Title, Col, Card, Grid, Group } from '@mantine/core';
import { InputWrapper, Input, TextInput, LoadingOverlay } from "@mantine/core";
import WalletAuth from "./wallet_auth";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers';
import HarmonyClient, { decodeSmartVaultFunction } from "@hashmesan/smartvault/lib/harmony_client";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { toBech32 } from "@harmony-js/crypto";
import AddressToggle from "./address_toggle";
import {BsShieldCheck} from "react-icons/bs";

export default function WalletLookup() {
    console.log("Walletlookup")
    const [init, setInit] = React.useState(false);
    const [wallet, setWallet] = React.useState(null);
    const [pageError, setPageError] = React.useState(null);
    const [visible, setVisible] = React.useState(true);
    const client = new HarmonyClient("https://api.s0.t.hmny.io", "0x3fa4135B88cE1035Fed373F0801118a3340B37e7");

    const name = new URLSearchParams(window.location.search).get('name');
    function loadWallet() {
        if (name == null || name == "") {
            setInit(true);
            return;
        }
        console.log("loading for ", name)
        setVisible(false);
        client.isNameAvailable(name + ".sefwallet.one", 100).then(e=>{
            if(e.address != ethers.constants.AddressZero) {
                console.log("Found at ", e.address);
            }
            setWallet({name, address: e.address});
            setVisible(true);
            setInit(true);
        })
    }

    React.useEffect(loadWallet,[]);

    return <Card shadow="md" padding="xl" radius="xl">
        <LoadingOverlay visible={!visible} />
        {wallet == null ? init ? <LookupForm/> : <div/> : <WalletInfo wallet={wallet}/>}
    </Card>
}

function LookupForm() {
    return <form action="#" method="get">
        <Title order={2}>Lookup Wallet</Title>
        <Space/>
        <Input size="lg" name="name" placeholder="Wallet Name" />     
        <Space/>
        <Button type="submit" size="lg">
            Search
        </Button>
    </form>
}

function WalletInfo({wallet, ...otherProps}) {
    return <div>
        <Center><Image src="images/avatar.png" width={100} radius={50}/></Center>
        <Space h="xl"/>
        <div style={{textAlign: "center"}}>
                <Title>@{wallet.name}</Title>
                <Space h="lg"/>
                <Center><AddressToggle walletAddress={wallet.address}/></Center>
                <Space h={50}/>
                <Button component={Link} to="guardianops" size="lg" radius="lg">
                    <BsShieldCheck size="32"/>
                    Guardian Approve
                </Button>
        </div>
    </div>
}