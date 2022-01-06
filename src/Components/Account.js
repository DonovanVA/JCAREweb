import React from 'react'
import './Account.css'
import JCARE from '../Images/JCARE.png'
import { FaWindows } from 'react-icons/fa'
import { useEffect } from 'react'

export default function Account({Pkey,SetPkey}) {
    
    return (
        <div className='Account'>
            <h1>Account</h1>
            <div className='Account_details'>
                <p className='Account_details_header'>JCARE tokens:</p>
                <p className='Account_details_publickey'>{Pkey}</p>
                <p className='Account_details_tokens'></p>
                <img src ={JCARE} height = '180' width ='180'></img>
            </div>
        </div>

    )
}
