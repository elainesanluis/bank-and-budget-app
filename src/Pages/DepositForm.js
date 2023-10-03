// DepositForm.js
import React, { useState } from 'react';

function DepositForm({ accounts, onDeposit }) {
  // const [selectedAccount, setSelectedAccount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [succesMessage, setSuccessMessage] = useState('');

  const handleDeposit = () => {
    // Find the account object based on the entered account number
    const selectedAccount = accounts.find(
      (account) => account.accountNumber === parseInt(accountNumber)
    );

    if (!selectedAccount) {
      setErrorMessage('Account not found. Please enter a valid account number.');
      return;
    }

    if (depositAmount >= 0) {
      onDeposit(selectedAccount.firstName, parseFloat(depositAmount));
      setAccountNumber('');
      setDepositAmount('');
      setErrorMessage('');
      setSuccessMessage('Deposit Successful!')
    } else {
      setErrorMessage('Please enter a valid deposit amount.');
    }
  };


  return (
    <div>
      <div className='deposit-container'>
      <label htmlFor='depositAccount'>Deposit Account: </label>
      <input
        id='depositAccount'
        type="number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Enter account number"/>
      <label htmlFor='depositAmount'>Deposit Amount: </label>
      <input
      id='depositAmount'
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        placeholder="Enter deposit amount"
      />
      <button id='deposit-money' onClick={handleDeposit}>Deposit</button>
      {succesMessage && <div className='success-manage'>{succesMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
    </div>
  );
}

export default DepositForm;
