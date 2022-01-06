import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './Homepage.css'
import Pimage from'../Images/Phantom.jpeg'
import Statistics from '../DATA/Statistics';
import Fruits from '../Images/Fruits.png';
//Title = 40px
//para = 30px
export default function Homepage({Log,Login,getProvider,isphantomInstalled,connectstate}) {
    return (
        <div className ='Homepage'>
            {Statistics.map((s)=>{
                return(<div className='Homepage_Statistics'>
                            <div><p className='Homepage_Statistics_header'>Total staked</p><h1 className='Homepage_Statistics_value'>${s.Amountstaked}</h1></div>
                            <div><p className='Homepage_Statistics_header'>Treasury</p><h1 className='Homepage_Statistics_value'>${s.Tbalance}</h1></div>
                            <div><p className='Homepage_Statistics_header'>Token rate</p><h1 className='Homepage_Statistics_value'>{s.Tokenrate}</h1></div>
                        </div>
)
            })} 
            <div className='Homepage_introduction'>
                <div className='Homepage_introduction_text_info'>
                    <h1 className='Homepage_introduction_text'>Health 3.0</h1>
                    <p className='Homepage_introduction_paragraph'>Embrace the whole new world of streamlined health, with JCARE's incentive structure</p>
                    <a className = 'Homepage_choices_hyperlink' target ='_blank' href='https://donovan-ng.gitbook.io/jcare/jcare'><button className='Homepage_introduction_button'>Read more</button></a>
                </div>
                <img className = 'Homepage_introduction_image'src={Fruits} height ='266.2' width ='543.4'/>
                </div>
            <div>
                <h1 className='Homepage_choices_title'>Find out more about JCARE</h1>
                    <div className='Homepage_choices'>
                    <a className = 'Homepage_choices_hyperlink' target ='_blank' href='https://donovan-ng.gitbook.io/jcare/governance/defi-2.0'><div className='Homepage_choices_container'><FaIcons.FaGlobe className='Homepage_choices_icons'/><h1 className='Homepage_choices_header'>Decentralisation</h1><h2 className='Homepage_choices_content1'>A brief introduction to DEFI</h2>
                            <p className='Homepage_choices_contents'>Credible ownership is important, but also<br></br> privacy, DEFI addresses modern risks of<br></br>Centralised services, such as...</p>
                            <button className='Homepage_choices_button'>Read more</button>
                        </div></a>
                
                        <a className = 'Homepage_choices_hyperlink' target ='_blank' href='https://donovan-ng.gitbook.io/jcare/jcare'><div className='Homepage_choices_container'><FaIcons.FaCoins className='Homepage_choices_icons'/><h1 className='Homepage_choices_header'>JCARE token</h1><h2 className='Homepage_choices_content2'>Discover the JCARE token</h2>
                            <p className='Homepage_choices_contents'>The JCARE token is developed on the <br></br> SOLANA blockchain. It is designed based<br></br>on the concept of...</p>
                            <button className='Homepage_choices_button'>Read more</button>
                        </div></a>
                
                        <a className = 'Homepage_choices_hyperlink' target ='_blank' href='https://donovan-ng.gitbook.io/jcare/governance/proof-of-history'><div className='Homepage_choices_container'><FaIcons.FaLock className='Homepage_choices_icons'/><h1 className='Homepage_choices_header'>Safeguard</h1><h2 className='Homepage_choices_content3'>Evaluate the risks and security protocols</h2>
                            <p className='Homepage_choices_contents'>As we embrace a less human and more<br></br>machine-like one, we ought to understand<br></br>the self-governing system of...</p>
                            <button className='Homepage_choices_button'>Read more</button>
                        </div></a>
                    </div>
            </div>
            
            <div className='Homepage_phantom'>
                <h1 className='Homepage_phantom_header'>The best place to manage your tokens</h1>
                    <div className='Homepage_phantom_text'>
                        <img className ='Homepage_phantom_text_image'src={Pimage} height='350' width='400'/>
                            <div className='Homepage_phantom_text_paragraph'>
                                <p>The phantom wallet connects you directly with the solana blockchain, built on the concept of having a reliable and effective wallet</p>
                                    <button className ='Homepage_phantom_text_button'onClick={()=>getProvider()}>Install</button>
                            </div>
                    </div>
            </div>
            
        </div>
        
    )
}
