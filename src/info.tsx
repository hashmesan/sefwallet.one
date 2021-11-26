import React from "react";
import ReactDOM from "react-dom";
import { Container, Pagination, Table, Text, Col, Card, Grid, Group } from '@mantine/core';
import axios from 'axios';
import web3utils from 'web3-utils';
const { toBech32, fromBech32 } = require('@harmony-js/crypto');
import { getMainDefinition } from '@apollo/client/utilities';
import { decodeSmartVaultFunction } from "@hashmesan/smartvault/lib/harmony_client";
import Caculate from "./calculate";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
	split,
	HttpLink,
	useSubscription
  } from "@apollo/client";
  import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
	uri: 'https://graph.sefwallet.one:9443/subgraphs/name/sefwallet-subgraph',
  });

const wsLink = new WebSocketLink({
	uri: 'wss://graph-ws.sefwallet.one:9444/subgraphs/name/sefwallet-subgraph',
	options: {
	  reconnect: true,
	  timeout: 100000,
	  minTimeout: 100000
	}
  });

const splitLink = split(
({ query }) => {
	const definition = getMainDefinition(query);
	return (
	definition.kind === 'OperationDefinition' &&
	definition.operation === 'subscription'
	);
},
wsLink,
httpLink,
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache()
});


function decodeName(data) {
	var decoded = decodeSmartVaultFunction(data);
	if(Array.isArray(decoded)) {
		return decoded.map(e=>e.name).join(" -> ")
	}

	console.log(decoded)
	return decoded.name
}

function TxTable({txs, ...otherProps}) {
	const rows = txs.map((tx) => (
		<tr key={tx.id}>
			<td><a href={"https://explorer.harmony.one/tx/"+tx.id}>{decodeName(tx.data)}</a></td>
			<td>{toBech32(tx.from)}</td>
			<td>{toBech32(tx.to)}</td>
			<td>{web3utils.fromWei(tx.value)}</td>
			<td>{new Date(parseInt(tx.blockTime)*1000).toISOString()}</td>
		</tr>
	));

	return (
		<Table>
			<thead>
				<tr>
					<th>Action</th>
					<th>From</th>
					<th>To</th>
					<th>Value</th>
					<th>Time</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
}

const GETSUMMARY_QUERY = gql`
  query getSummary {
	summary(id:"1") {
		id
		txCount
		walletCount
		feePaid
		feeCollected
		currentBlock
	}
  }
`;

const SUMMARY_SUBSCRIPTION = gql`
  subscription OnSummaryUpdated {
	summary(id:"1") {
		id
		txCount
		walletCount
		feePaid
		feeCollected
		currentBlock
		totalDeposits
		totalWithdrawals
	}
  }
`;


const TX_SUBSCRIPTION = gql`
  subscription OnSummaryUpdated($offset: Int!, $size:Int!) {
	transactions(skip: $offset, first: $size, orderBy:blockTime, orderDirection:desc) {
		id,
		blockNumber
		blockTime
		from
		to
		value
		data
		gasUsed
		gasPrice
		refundAddress
		refundFee
		isMeta
		metaSuccess
	}
  }
`;

function InfoScreen(props) {
	const [info, setInfo] = React.useState(null);
	const [txs, setTxs] = React.useState(null);
	const [page, setPage] = React.useState(1);
	const [balanceData, setBalanceData] = React.useState(null);

	//const { loading, error, data } = useQuery(GETSUMMARY_QUERY);
	const { data, loading } = useSubscription(
		SUMMARY_SUBSCRIPTION,
	  );
	const txState = useSubscription(
		TX_SUBSCRIPTION,
	{variables: {offset: (page-1)*10, size: 10}}
	);
	console.log("summary", loading, data, txState)

	// React.useEffect(()=>{
	// 	updateTx()
	// }, [page])

	React.useLayoutEffect(()=>{
		new Caculate().computeAll().then(e=>{
			console.log("PAIR=", e);
			setBalanceData(e);
		})
	},[])

	if(loading || txState.loading) {
		return <div>Loading...</div>
	}
	return <Container>
		<img src="images/icon.png" width="37" style={{ marginRight: 10, float: "left" }} /><h1>Info</h1>
		<Grid>
			<Col span={6}>
				<Card shadow="sm" padding="lg">
					<Text size="lg" weight={500} style={{marginBottom: 15}}>Key Metrics</Text>
					<Group position="apart">
						<Text weight={400}>Total Wallets</Text>
						<Text>{data.summary.walletCount}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}>Total Balance</Text>
						<Text>{!balanceData? "Loading" : "(~" + balanceData.estimateONE + " ONE) $" + (balanceData.balance + balanceData.totalLocked).toFixed(0)}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}>Locked in Defi</Text>
						<Text>{!balanceData? "Loading" : "$" + balanceData.totalLocked.toFixed(0)}</Text>
					</Group>					
					<Group position="apart">
						<Text weight={400}>Total # Transactions</Text>
						<Text>{data.summary.txCount}</Text>
					</Group>
				</Card>
			</Col>
			<Col span={6}>
				<Card shadow="sm" padding="lg">
					<Text size="lg" weight={500} style={{ marginBottom: 15 }}>Relayer</Text>
					<Group position="apart">
						<Text weight={400}>Tx Fee Collected</Text>
						<Text>{Number(data.summary.feeCollected).toFixed(4)}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}>Tx Fee Paid</Text>
						<Text>{Number(data.summary.feePaid).toFixed(4)}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}>Current Block</Text>
						<Text>{data.summary.currentBlock}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}></Text>
						<Text></Text>
					</Group>					
				</Card>
			</Col>
			<Col span={12}>
				<Card shadow="sm" padding="lg">
					<Text size="lg" weight={500} style={{ marginBottom: 15 }}>Transactions</Text>
					<TxTable txs={txState.data.transactions || []}/>
					<Pagination page={page} onChange={setPage} total={Math.ceil(data.summary.txCount/10)} />
				</Card>
			</Col>
		</Grid>
		<div style={{marginBottom: 100}}></div>
	</Container>
}

ReactDOM.render(
	<ApolloProvider client={client}>
	<InfoScreen/>
	</ApolloProvider>, 
	document.getElementById('container'))
