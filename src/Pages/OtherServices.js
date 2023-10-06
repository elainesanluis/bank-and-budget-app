// OtherServices.js 
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function OtherServices({accounts}) {



return (
    <div>
        <div>
            <Link to="/">
            <img className='bankLogo' src={logo} alt='Bank Logo' />
            </Link>  
            <h1>Bank of Avion School</h1>
        </div>
    <br/>
    <br/>
    <div id='other-services' className='other-services'>
    <h2 className='page-heading'>Other Services</h2>







    </div>
    </div>
)
}

export default OtherServices;