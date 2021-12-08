import React, { Component } from 'react';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Modal, Menu, Button, Group } from '@mantine/core';
const {
    toBech32,
    fromBech32,
  } = require('@harmony-js/crypto');
  import { useLocalStorageValue } from '@mantine/hooks';
import { useGuardianProvider } from './guardian_provider';

export function PickAddress({onSelected}) {
    const [addresses, setAddresses] = React.useState([]);
    const { connector, active, error, account, activate, library, chainId, deactivate } = useWeb3React()
    const provider = useGuardianProvider();

    React.useEffect(() => {
        if(active) {
            library.provider._providers[0].getAccountsAsync().then(accounts=>{
                setAddresses(accounts);
            });
        }
    },[active]);

    console.log("Pick-", addresses);

    return <div>
        {addresses.map(e=>{
            return     <Button 
                        variant="default" size="sm" 
                        fullWidth style={{marginBottom: 5}}
                        onClick={()=>{ provider.setAccount(e); onSelected(e)}}>{toBech32(e)}</Button>        
        })}
    </div>
}

export default function ModalPick() {
    const [opened, setOpened] = React.useState(true);
  
    return (
      <>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Pick Address"
        >
          <PickAddress onSelected={()=>setOpened(false)}/>
        </Modal>
      </>
    );
  }
  