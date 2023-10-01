// TransactionsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TransactionsPage.css';
import DepositForm from './DepositForm';
import WithdrawForm from './WithdrawForm';
import { handleDeposit, handleWithdraw } from '../App'; 

function TransactionsPage({accounts, onDeposit, onWithdraw}) {
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);

  const handleDepositClick = () => {
    setShowDepositForm(true);
    setShowWithdrawForm(false); // Hide withdraw form if it's currently shown
  };

  const handleWithdrawClick = () => {
    setShowDepositForm(false); // Hide deposit form if it's currently shown
    setShowWithdrawForm(true);
  };

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
      <i id='deposit-btn' className="fa-solid fa-wallet deposit-withdraw-btn" onClick={handleDepositClick} ></i><h3>Deposit</h3>
      <i id='withdraw-btn' className="fa-solid fa-money-bill deposit-withdraw-btn" onClick={handleWithdrawClick}></i><h3>Withdraw</h3>
      
      
      </div>
      </div>
      {showDepositForm && (
          <div>
            <DepositForm accounts={accounts} onDeposit={onDeposit} />
          </div>
        )}
        {showWithdrawForm && (
          <div>
          <WithdrawForm accounts={accounts} onWithdraw={onWithdraw} />
          </div>)}
    </div>
  );
}

export default TransactionsPage;
