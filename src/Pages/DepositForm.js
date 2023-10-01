// DepositForm.js
import React, { useState } from 'react';

function DepositForm({ accounts, onDeposit }) {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  const handleDeposit = () => {
    if (selectedAccount && depositAmount >= 0) {
      onDeposit(selectedAccount, parseFloat(depositAmount));
      setSelectedAccount('');
      setDepositAmount('');
    }
  };

  return (
    <div>
      <h3>Deposit</h3>
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
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        placeholder="Enter deposit amount"
      />
      <button id='deposit-money' onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default DepositForm;
