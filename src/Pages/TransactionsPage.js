// TransactionsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TransactionsPage.css';

function TransactionsPage() {
  return (
    <div>
      <div id='create-account-logo'>
    <Link to="/">
        <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo' />
      </Link>
      <h1>Bank of Avion School of the Philippines</h1>
    </div>
      <div id='transactions-main' className='transactions-main'>
      <h2>Transactions</h2>
      <div className='deposit-withdraw'>
      <i id='deposit-btn' className="fa-solid fa-wallet deposit-withdraw-btn"></i><h3>Deposit</h3>
      <i id='withdraw-btn' className="fa-solid fa-money-bill deposit-withdraw-btn"></i><h3>Withdraw</h3>
      </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
