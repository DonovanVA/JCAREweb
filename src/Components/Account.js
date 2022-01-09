import React from 'react'
import './Account.css'
import JCARE from '../Images/JCARE.png'
import { FaWindows } from 'react-icons/fa'
import { useEffect } from 'react'

export default function Account({Pkey,SetPkey,Pubkey}) {



    
    return (
        <div className='Account'>
            <h1>Account</h1>
            <div className='Account_details'>
                <p className='Account_details_header'>JCARE tokens:</p>
                <h2>publickey:</h2>
                <p className='Account_details_publickey'>{Pkey}</p>
                <h2>Tokens:</h2>
                <p className='Account_details_tokens'>0</p>
                <img src ={JCARE} height = '180' width ='180'></img>
            </div>
        </div>

    )
}
