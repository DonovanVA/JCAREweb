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
//After Connecting
  
  const[Log,Login] = useState(false);
  const [connectstate,setconnectstate] = useState(false)
  const [Pkey,SetPkey] = useState('')
  const isPhantomInstalled = window.solana && window.solana.isPhantom
  
  let Pubkey=''
  //(subfunction) disconnect wallet function
  const Walletdisconnect=()=>{
    window.solana.disconnect();
    window.solana.on('disconnect', () => {
      console.log("disconnected!"); 
      setconnectstate(false);
    })
  }
  

  //1. state management for connect+ load public key ON refresh
  const getProvider = async () => {
    if ("solana" in window) {
      await window.solana.connect() //opens wallet to connect to
      .then(provider => {
        console.log('key', provider.publicKey.toString())
        SetPkey(provider.publicKey.toString())
      })
      .catch(function(error){
        console.log(error)
      });
      const provider = window.solana;
      if (window.solana.isPhantom) {
        
        return provider;
      }
    } else {
      getPhantom()
    }
};

  //2.trigger onload when window reloads only if solana is in window
  window.onload = () => {
    if ("solana" in window){ 
    window.solana.on('connect', ()=>{
      setconnectstate(true)
    })
  }
      
    }
  



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
 
 //2. getphantomfor web
  const getPhantom = () => {
  window.open("https://phantom.app/", "_blank");
  };

  
  //3. wallet handler for events that require wallet to be installed (only connect when wallet is installed)
  
  
  return(
    
  <div className = 'App'>
    <BrowserRouter>
    <Background Log ={Log} Login={Login} getProvider={getProvider} getPhantom={getPhantom} isPhantomInstalled={isPhantomInstalled} Walletdisconnect={Walletdisconnect} connectstate={connectstate}/>
    
    <Routes>
    <Route exact path ="/"element={<div>
    <Bimage/>
    <Homepage getPhantom={getPhantom}/></div>}>
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
