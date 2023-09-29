// TransactionsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function TransactionsPage() {
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
      <h2>TransactionsPage</h2>
    </div>
  );
}

export default TransactionsPage;
