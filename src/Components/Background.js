import React from 'react'
import './Background.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IconContext } from 'react-icons';
export default function Background({Log,Login,getProvider,isPhantomInstalled, Walletconnect, Walletdisconnect,connectstate,getwallethandler}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return(
    <div>
      
      <div className='Background'>
      
        



      
        <FaIcons.FaHospital className='Background_icon1'></FaIcons.FaHospital>
        <Link to ={`/`}><button className= "Background_textheader">JCare</button></Link>
        <a target ='_blank' href='https://donovan-ng.gitbook.io/jcare/'><button className= "Background_nav">Whitepaper</button></a>
        <Link to ={'FAQ'}><button className= "Background_nav">FAQ</button></Link>
        <Link to ={'/Developers'}><button className= "Background_nav">Developers</button></Link>
        {sidebar?
        <div>
        <AiIcons.AiOutlineClose className='Background_bar' onClick={showSidebar}/>
          <nav className={sidebar?'Backgropund_bar_container.active':'Background_bar_container'}>
            <ul className='Background_bar_list'>
              <a target ='_blank' href='https://donovan-ng.gitbook.io/jcare/'><button className= "Background_bar_item">Whitepaper</button></a>
              <Link to ={'FAQ'}><button className= "Background_bar_item">FAQ</button></Link>
              <Link to ={'/Developers'}><button className= "Background_bar_item">Developers</button></Link>
              {connectstate? 
              <>
                <Link to ='/Account' className = 'Background_icon2'><FaIcons.FaPortrait></FaIcons.FaPortrait></Link>
                <button className='Background_bar_item'onClick={()=>Walletdisconnect()}>Disconnect</button>
              </>:
              <>
                <button className ="Background_bar_item" onClick={()=>getwallethandler()}>Connect</button>
              </>
      }
            </ul>
          </nav>
        </div>
        :<FaIcons.FaBars className='Background_bar' onClick={showSidebar}/>
        }  
        {connectstate? <><Link to ='/Account' className = 'Background_icon2'><FaIcons.FaPortrait></FaIcons.FaPortrait></Link>
          <button className='Background_button2'onClick={()=>Walletdisconnect()}>Disconnect</button></>:
          <>
            <button className ="Background_button1" onClick={()=>getwallethandler()}>Connect</button>
          </>
      }
      </div>
      
    </div>
    )
}
