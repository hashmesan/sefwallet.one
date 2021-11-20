import React from "react";
import ReactDOM from "react-dom";
import { Container, AppShell, Button, Menu, Header, Navbar,LoadingOverlay, Space, Center, Pagination, Table, Text,Image, SimpleGrid, Title, Col, Card, Grid, Group } from '@mantine/core';
import WalletAuth from "./wallet_auth";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers';
import HarmonyClient, { decodeSmartVaultFunction } from "@hashmesan/smartvault/lib/harmony_client";
import WalletLookup from "./wallet_lookup";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import GuardianOps from "./guardian_ops";
import { HashRouter } from "react-router-dom";
import { Web3Provider } from '@ethersproject/providers'
import { Harmony } from '@harmony-js/core'
import { GrConnect } from "react-icons/gr";
import { fromBech32, toBech32 } from "@harmony-js/crypto";

function getLibrary(provider: any): Web3Provider | Harmony {
    var library: Web3Provider | Harmony
  
    if (provider?.chainType === 'hmy') {
      library = provider
    } else {
      library = new Web3Provider(provider)
      library.pollingInterval = 3000
    }
  
    return library
}


function MyHeader() {
    const { active, error, account, activate, library, chainId, deactivate } = useWeb3React()
    const bech32 = account ? toBech32(account) : null;

    return <Group position="apart">
                 <Group><img src="images/icon.png" width="40"/><Text size="xl" weight="bold" color="blue">Sef Wallet</Text></Group>
                 {account && <Menu control={<Button>{bech32.substr(0, 5) + "..." + bech32.substr(-4)}</Button>}>
                    <Menu.Item onClick={deactivate} icon={<GrConnect />}>Disconnect</Menu.Item>
                </Menu>}
            </Group>
}

function GuardianApp() {

    return <Web3ReactProvider getLibrary={getLibrary}><AppShell
                padding="md"
                navbar={null}
                header={<Header height={70} padding="xs"><MyHeader/></Header>}
                styles={(theme) => ({
                root: { minHeight: '100vh', backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                main: { maxWidth: 650, margin: "auto" },
                })}>
        <Container style={{paddingTop: 40}}>
            <HashRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<WalletLookup/>} />
                        <Route path="guardianops" element={<WalletAuth/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </Container>
  </AppShell></Web3ReactProvider>
}  


ReactDOM.render(
	<GuardianApp></GuardianApp>, 
	document.getElementById('container'))
