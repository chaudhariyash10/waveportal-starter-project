import React, {useEffect} from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  
  const [currentAccount, setCurrentAccount] = useState("")
  
  const wave = () => {
    
  }

  const checkIfWalletIsConnected = async () => {
    try
    {const { ethereum } = window;

    if (!ethereum) {
      alert("Make sure you have metamask!");
    } else {
      console.log("We have the ethereum object", ethereum);
    }
      /*
      * Check if we're authorized to access the user's wallet
      */

    const accounts = await ethereum.request({method: "eth_accounts"})
    if(accounts.length !== 0 ) {
      console.log("Authorised Account found!", accounts[0])
      setCurrentAccount(accounts[0]);
    } else {
      console.log("No authorized account found")

    }} catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  },[])
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        I am Yash(Sunny) and I worked am working on blockchain so that's pretty cool right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
