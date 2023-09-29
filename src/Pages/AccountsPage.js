// AccountsPage.js
import React from 'react';
import './AccountsPage.css';
import { Link } from 'react-router-dom';

function AccountsPage() {
  return (
    <div>
    <div id='create-account-logo'>
    <Link to="/">
        <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo' />
      </Link>
      <h1>Bank of Avion School of the Philippines</h1>
    </div>
    <br/>
    <br/>
    <br/>
        
      <h2>Accounts Page</h2>
    </div>
  );
}

export default AccountsPage;
