// WithdrawForm.js
import React, { useState } from 'react';

function WithdrawForm({ accounts, onWithdraw }) {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [transactionNumber, setTransactionNumber] = useState(1);

  const handleWithdraw = () => {
    if (selectedAccount && withdrawAmount >= 0) {
      onWithdraw(selectedAccount, parseFloat(withdrawAmount));
      setSelectedAccount('');
      setWithdrawAmount('');
      setShowModal(true);
    // Generate the transaction number in the format W0001, W0002, etc.
    setTransactionNumber((prevNumber) => prevNumber + 1);
    } else {
  setErrorMessage('You cannot withdraw an amount greater than your account balance.');
  setShowModal(false);
        }
  };

  const generateTransactionNumber = () => {
    const transactionNumberString = String(transactionNumber).padStart(4, '0');
    return `W${transactionNumberString}`;
  };


  return (
    <div>
      <h3>Withdraw</h3>
      <select
        value={selectedAccount}
        onChange={(e) => setSelectedAccount(e.target.value)}
      >
        <option value="">Select an account</option>
        {accounts.map((account, index) => (
          <option key={index} value={account.firstName}>
            {account.firstName} {account.lastName}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Enter withdrawal amount"
      />
      <button id='withdraw-money' onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default WithdrawForm;
