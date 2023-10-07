// WithdrawForm.js
import React, { useState } from 'react';
import '../components/Styles.css';
import {generateTransactionNumber } from '../components/TransactionNumber';
import TransactionDetails from '../components/TransactionDetails'; 

function WithdrawForm({ accounts, updateTransactionDetails }) {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [succesMessage,setSuccessMessage] = useState('');
  const [transactionDetails, setTransactionDetails] = useState(null); 
  const [isTransactionDetailsVisible, setTransactionDetailsVisible] = useState(false);

  const handleWithdraw = () => {
    const transactionNumber = generateTransactionNumber('Withdrawal');
    const selectedAccount = accounts.find((account) => account.accountNumber === parseInt(accountNumber)); 

    if (!selectedAccount) {
      setErrorMessage('Account not found. Please enter a valid account number.');
      setSuccessMessage('');
      setTransactionDetails(null);
      return;
    }

  if (withdrawAmount >= 0 && withdrawAmount <= selectedAccount.clientBalance) {
    const fullName = `${selectedAccount.firstName} ${selectedAccount.lastName}`;
    setAccountNumber('');
    setWithdrawAmount('');
    setErrorMessage('');
    setSuccessMessage('Withdrawal Successful!')
    setTransactionDetailsVisible(true);

    const updatedClientBalance = selectedAccount.clientBalance - parseFloat(withdrawAmount);
    selectedAccount.clientBalance = updatedClientBalance;

    const currentDate = new Date();
    const transactionTime = currentDate.toLocaleTimeString();
    const transactionDate = currentDate.toLocaleDateString();
    
    const updatedTransactionDetails = {
      type: 'Withdrawal',
      accountName: fullName,
      accountNumber: selectedAccount.accountNumber,
      amount: parseFloat(withdrawAmount),
      transactionNumber,
      transactionTime,
      transactionDate,
    };
    updateTransactionDetails(updatedTransactionDetails); 
    } else {
    setErrorMessage('You cannot withdraw an amount greater than your account balance.');
    setSuccessMessage('');
    setTransactionDetails(null); 
  }
};
  return (
    <div>
      <div className='withdraw-container'>
      <label htmlFor='withdrawAccount' className='withdrawAccount'>Withdraw Account: </label>
      <input
      id='withdrawAccount'
      type="number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Enter account number"
      />
      <label htmlFor='withdrawAmount' className='withdrawAmount'>Withdraw Amount: </label>
      <input
      id='withdrawAmount'
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Enter withdrawal amount"
      /><br/>
      <button id='withdraw-money' onClick={handleWithdraw}>Withdraw</button>
      {succesMessage && <div className="success-message">{succesMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
      {transactionDetails && ( // Render TransactionDetails when transactionDetails is not null
          <TransactionDetails
            type={transactionDetails.type}
            accountName={transactionDetails.accountName}
            accountNumber={transactionDetails.accountNumber}
            amount={transactionDetails.amount}
            transactionNumber={transactionDetails.transactionNumber}
            transactionTime={transactionDetails.transactionTime}
            transactionDate={transactionDetails.transactionDate}
            isVisible={isTransactionDetailsVisible}
          />
        )}
    </div>
  );
}
export default WithdrawForm;
