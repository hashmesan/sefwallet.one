import React from "react";
import ReactDOM from "react-dom";
import { Container, Pagination, Table, Text, Col, Card, Grid, Group } from '@mantine/core';
import axios from 'axios';
import web3utils from 'web3-utils';
const { toBech32, fromBech32 } = require('@harmony-js/crypto');

function TxTable({txs, ...otherProps}) {
	const rows = txs.map((tx) => (
		<tr key={tx.id}>
			<td><a href={"https://explorer.harmony.one/tx/"+tx.hash}>{tx.fname}</a></td>
			<td>{toBech32(tx.from)}</td>
			<td>{toBech32(tx.to)}</td>
			<td>{web3utils.fromWei(tx.value)}</td>
			<td>{new Date(tx.blocktime*1000).toISOString()}</td>
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

const URL = "https://api.smartvault.one:8443/";


function InfoScreen(props) {
	const [info, setInfo] = React.useState(null);
	const [txs, setTxs] = React.useState(null);
	const [page, setPage] = React.useState(1);

	function updateTx() {
		axios.post(URL, { env: "mainnet0", operation: "getInfoTx", limit: 10, offset: 10 * (page-1) }).then(e => {
			console.log(e.data)
			setTxs(e.data);
		})
	}

	React.useLayoutEffect(()=>{
		axios.post(URL, { env: "mainnet0", operation: "getInfo"}).then(e=>{
			console.log(e.data)
			setInfo(e.data);
		})

		updateTx()

	},[])

	React.useEffect(()=>{
		updateTx()
	}, [page])

/*{"txCount":3,"gasUsed":"0.00853388","relayerReceived":"0.0900000000001042",
"walletCount":"1","balanceOne":0.7423199999998958}*/
	if(info == null) {
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
						<Text>{info.walletCount}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}>Total ONEs</Text>
						<Text>{info.balanceOne.toFixed(4)}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}>Total # Transactions</Text>
						<Text>{info.txCount}</Text>
					</Group>
				</Card>
			</Col>
			<Col span={6}>
				<Card shadow="sm" padding="lg">
					<Text size="lg" weight={500} style={{ marginBottom: 15 }}>Relayer</Text>
					<Group position="apart">
						<Text weight={400}>Tx Fee Collected</Text>
						<Text>{Number(info.relayerReceived).toFixed(4)}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}>Tx Fee Paid</Text>
						<Text>{Number(info.gasUsed).toFixed(4)}</Text>
					</Group>
					<Group position="apart">
						<Text weight={400}>Current Block</Text>
						<Text>{info.currentBlock}</Text>
					</Group>
				</Card>
			</Col>
			<Col span={12}>
				<Card shadow="sm" padding="lg">
					<Text size="lg" weight={500} style={{ marginBottom: 15 }}>Transactions</Text>
					<TxTable txs={txs || []}/>
					<Pagination page={page} onChange={setPage} total={Math.ceil(info.txCount/10)} />
				</Card>
			</Col>
		</Grid>
		<div style={{marginBottom: 100}}></div>
	</Container>
}

ReactDOM.render(<InfoScreen/>, document.getElementById('container'))
