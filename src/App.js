import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Account from './Components/Account';
import { useEffect } from "react";
import Homepage from './Components/Homepage';
import Background from './Components/Background';
import Bimage from './Components/Bimage';
import Developers from './Components/Developers';
import FAQ from './Components/FAQ';

function App() {
  const solanaWeb3 = require('@solana/web3.js');
  console.log(solanaWeb3);
  let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
// After Connecting
  //ERROR connection.getBalance(window.solana.publicKey).then(function(value) {console.log(value)})

  const[Log,Login] = useState(false);
  const [connectstate,setconnectstate] = useState(false)
  const [Pkey,SetPkey] = useState('')
  const isPhantomInstalled = window.solana && window.solana.isPhantom
  
  //(subfunction) connect wallet function
  async function Walletconnect() {
    window.solana.request({ method: "connect", params: { onlyIfTrusted: true }});
    try {
      const resp = await window.solana.request({ method: "connect" });
      resp.publicKey.toString()
      
      // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
  } catch (err) {
      // { code: 4001, message: 'User rejected the request.' }
  }
  window.solana.on("connect", () => {
    
      setconnectstate(true);
    })
  }

  //(subfunction) disconnect wallet function
  const Walletdisconnect=()=>{
    window.solana.disconnect();
    window.solana.on('disconnect', () => {
      console.log("disconnected!"); 
      setconnectstate(false);
    })
  }
  

  //1. state management for connect + eager connection + load public key ON refresh
  useEffect(() => {
    window.solana?.connect({ onlyIfTrusted: true })
        .then(({ publicKey }) => {

        })
       
        .catch(() => {
          console.log('failed to load publickey!')
            // Handle connection failure as usual
        })

    window.solana?.on("connect", () => {
      setconnectstate(true);
    });
    
    window.solana?.on("disconnect", () => {
      setconnectstate(false);
    });
  }, [window.solana])

  //2(old). eager connection if trusted + load publickey
  //useEffect(() => {
    // Will either automatically connect to Phantom, or do nothing.
    //window.solana.connect({ onlyIfTrusted: true })
        //.then(({ publicKey }) => {
          
          
        //})
        //.catch(() => {
          //console.log('failed to load publickey!')
            // Handle connection failure as usual
        //})
//}, []);
 
 //2. get provider for web
  const getProvider = () => {
  window.open("https://phantom.app/", "_blank");
  };

  
  //3. wallet handler for events that require wallet to be installed (only connect when wallet is installed)
  const getwallethandler =()=>{
    if(isPhantomInstalled===true){
        Walletconnect()
      }
  
    else{
        getProvider()
        console.log(window.solana)
    } 
    
  }
  return(
    
  <div className = 'App'>
    <BrowserRouter>
    <Background Log ={Log} Login={Login} getProvider={getProvider} isPhantomInstalled={isPhantomInstalled} Walletconnect={Walletconnect} Walletdisconnect={Walletdisconnect} connectstate={connectstate} getwallethandler={getwallethandler}/>
    
    <Routes>
    <Route exact path ="/"element={<div>
    <Bimage/>
    <Homepage getProvider={getProvider} isPhantomInstalled={isPhantomInstalled} connectstate={connectstate}/></div>}>
    </Route>
    <Route path ='/Account' element={<Account Pkey={Pkey} SetPkey={SetPkey}/>}>
    
    </Route>
    <Route path ='/Developers' element={<Developers/>}>
    </Route>
    <Route path ='/FAQ' element ={<FAQ/>}>

    </Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
