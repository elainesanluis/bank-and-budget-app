// DepositForm.js
import React, { useState } from 'react';

function DepositForm({ accounts, onDeposit }) {
  // const [selectedAccount, setSelectedAccount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const handleDeposit = () => {
  //   if (selectedAccount && depositAmount >= 0) {
  //     onDeposit(selectedAccount, parseFloat(depositAmount));
  //     setSelectedAccount('');
  //     setDepositAmount('');
  //   }
  // };
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
    } else {
      setErrorMessage('Please enter a valid deposit amount.');
    }
  };


  return (
    <div>
      <h3>Deposit</h3>
      {/* <select
        value={selectedAccount}
        onChange={(e) => setSelectedAccount(e.target.value)}
      >
        <option value="">Select an account</option>
        {accounts.map((account, index) => (
          <option key={index} value={account.firstName}>
            {account.firstName} {account.lastName}
          </option>
        ))}
      </select> */}
<input
        type="number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Enter account number"/>

      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        placeholder="Enter deposit amount"
      />
      <button id='deposit-money' onClick={handleDeposit}>Deposit</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default DepositForm;
