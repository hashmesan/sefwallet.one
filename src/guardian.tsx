import React from "react";
import ReactDOM from "react-dom";
import { Container, AppShell, Header, Navbar, Space, Center, Pagination, Table, Text,Image, SimpleGrid, Title, Col, Card, Grid, Group } from '@mantine/core';
import WalletAuth from "./wallet_auth";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'

function WalletButton({image, name}) {
    return <Card shadow="sm" padding="lg" style={{marginRight: 40}}>
        <Center><Image radius="lg" src={image} height={200} width={200}/></Center>
        <Title order={3} align="center">{name}</Title>
    </Card>
}

function MyHeader() {
    return <div><Group><img src="images/icon.png" width="40"/><Text size="xl" weight="bold" color="blue">Guardian App</Text></Group></div>
}

function GuardianApp() {
    return     <AppShell
    padding="md"
    navbar={null}
    header={<Header height={60} padding="xs"><MyHeader/></Header>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
  >
    <Container>
            <WalletAuth/>
        </Container>
  </AppShell>
}  


ReactDOM.render(
	<GuardianApp></GuardianApp>, 
	document.getElementById('container'))
