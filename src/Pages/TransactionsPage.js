// TransactionsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Styles.css';
import DepositForm from './DepositForm';
import WithdrawForm from './WithdrawForm';
import TransactionDetails from '../components/TransactionDetails';
import logo from '../images/logo.png';

function TransactionsPage({accounts}) {
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [isTransactionDetailsVisible, setTransactionDetailsVisible] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);


  const handleDepositClick = () => {
    setShowDepositForm(true);
    setShowWithdrawForm(false); // Hide withdraw form if it's currently shown
  };

  const handleWithdrawClick = () => {
    setShowDepositForm(false); // Hide deposit form if it's currently shown
    setShowWithdrawForm(true);
}

const updateTransactionDetails = (details) => {
  console.log('Updating transaction details:', details);
  setTransactionDetails(details);
  setTransactionDetailsVisible(true);
  console.log('isTransactionDetailsVisible:', isTransactionDetailsVisible);
 };

const closeTransactionDetails = () => {
  setTransactionDetailsVisible(false);
  console.log('Close button clicked'); 
  };

return (
    <div>
      <div id='create-account-logo'>
    <Link to="/">
        <img className='bankLogo' src={logo} alt='Bank Logo' />
      </Link>
      <h1>Bank of Avion School</h1>
    </div>
    <br/>
    <br/>
      <div id='transactions-main' className='transactions-main'>
      
      <h2 className='page-heading'>Transactions</h2>
      <div className='deposit-withdraw'>
      <i id='deposit-btn' className="fa-solid fa-wallet deposit-withdraw-btn" onClick={handleDepositClick} ></i><h3 className='deposit-withdraw-title'>Deposit</h3>
      <i id='withdraw-btn' className="fa-solid fa-money-bill deposit-withdraw-btn" onClick={handleWithdrawClick}></i><h3 className='deposit-withdraw-title'>Withdraw</h3>
      
      
      </div>
      </div>
      <div className='deposit-withdrawal-container'>
      {showDepositForm && (
          <div>
            <DepositForm accounts={accounts} updateTransactionDetails={updateTransactionDetails}
/>
          </div>
        )}
        {showWithdrawForm && (
          <div>
          <WithdrawForm accounts={accounts} updateTransactionDetails={updateTransactionDetails}/>
          </div>)}
          </div>
          <div className={`transaction-details-container ${isTransactionDetailsVisible ? 'visible' : ''}`}>
          {transactionDetails && isTransactionDetailsVisible && (
          <div>
          <TransactionDetails
          type={transactionDetails.type}
          accountName={transactionDetails.accountName}
          accountNumber={transactionDetails.accountNumber}
          amount={transactionDetails.amount}
          transactionNumber={transactionDetails.transactionNumber}
          transactionTime={transactionDetails.transactionTime}
          transactionDate={transactionDetails.transactionDate}
          isVisible={isTransactionDetailsVisible}
          onClose={closeTransactionDetails}
          />
          </div>
      )}
      </div>
    </div>
  );
}

export default TransactionsPage;
