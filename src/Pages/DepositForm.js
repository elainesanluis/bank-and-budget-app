// DepositForm.js
import React, { useState, useEffect } from 'react';
import '../components/Styles.css';
import {generateTransactionNumber} from '../components/TransactionNumber';

function DepositForm({ accounts, updateTransactionDetails  }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  useEffect(() => {
    // Initialize local storage for transaction logs if not present
    if (!localStorage.getItem('transactionLogs')) {
      localStorage.setItem('transactionLogs', JSON.stringify([]));
    }
  }, []);

  const handleDeposit = () => {
    const transactionNumber = generateTransactionNumber('Deposit');

    // Find the account object based on the entered account number
    const selectedAccount = accounts.find(
      (account) => account.accountNumber === parseInt(accountNumber));

    if (!selectedAccount) {
      setErrorMessage('Account not found. Please enter a valid account number.');
      setSuccessMessage('');
      return;
    }

    if (depositAmount >= 0) {
      const fullName = `${selectedAccount.firstName} ${selectedAccount.lastName}`
      setAccountNumber('');
      setDepositAmount('');
      setErrorMessage('');
      setSuccessMessage('Deposit Successful!')
      const currentDate = new Date();
      const transactionTime = currentDate.toLocaleTimeString();
      const transactionDate = currentDate.toLocaleDateString();

      const updatedClientBalance = selectedAccount.clientBalance + parseFloat(depositAmount);
      selectedAccount.clientBalance = updatedClientBalance;

      const updatedTransactionDetails = {
        type: 'Deposit',
        accountName: fullName,
        accountNumber: selectedAccount.accountNumber,
        amount: parseFloat(depositAmount),
        transactionNumber,
        transactionTime,
        transactionDate,
      };
      updateTransactionDetails(updatedTransactionDetails);

  // Log the deposit transaction
  const transactionLog = {
    date: transactionDate,
    type: 'Deposit',
    account: accountNumber,
    amount: parseFloat(depositAmount),
    transactionNumber,
  };
  // Retrieve existing logs from local storage or initialize an empty array
    const storedLogs = JSON.parse(localStorage.getItem('transactionLogs')) || [];
    // Update the logs with the new transaction log
    const updatedLogs = [...storedLogs, transactionLog];
    // Save the updated logs back to local storage
      localStorage.setItem('transactionLogs', JSON.stringify(updatedLogs));
    } else {
      setErrorMessage('Please enter a valid deposit amount.');
      setSuccessMessage('');
    }
  
    };

  return (
    <div>
      <div className='deposit-container'>
      <label htmlFor='depositAccount' className='depositAccountLabel'>Deposit Account: </label>
      <input
        id='depositAccount'
        type="number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Enter account number"/>
      <label htmlFor='depositAmount' className='depositAmountLabel'>Deposit Amount: </label>
      <input
      id='depositAmount'
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        placeholder="Enter deposit amount"
      /><br/>
      <button id='deposit-money' onClick={handleDeposit}>Deposit</button>
      {successMessage && <div className='success-message'>{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
    </div>
  );
}

export default DepositForm;
