import React, { useState } from 'react';
const {
    toBech32,
    fromBech32,
  } = require('@harmony-js/crypto');
import useClipboard from "react-use-clipboard";
import Notifications, {notify} from 'react-notify-toast';
import {Group, Text} from '@mantine/core';
export default function AddressToggle({walletAddress}) {
  // Declare a new state variable, which we'll call "count"
  const [isToggle, setIsToggle] = useState(false);
  const address = isToggle? walletAddress : toBech32(walletAddress)
  const [isCopied, setCopied] = useClipboard(address);
  const img = isToggle ? 
                "images/harmony-small.png"
                :"images/ethereum.svg";

  return (
    <div>
      <Group >
        <Notifications/>
        <Text size="lg" onClick={(e)=>{ notify.show("Copied!", "success", 1000); setCopied(); }}>{address}</Text>
        <img onClick={(e)=> { e.preventDefault(); setIsToggle(!isToggle)}} src={img} width={isToggle? 25 : 14} />     
      </Group>     
    </div>
  );
}