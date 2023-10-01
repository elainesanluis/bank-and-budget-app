// TransferPage.js

import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function TransferPage({accounts, handleTransferMoney  }) {
  const [senderAccount, setSenderAccount] = useState('');
  const [receiverAccount, setReceiverAccount] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTransfer = () => {
    if (!senderAccount || !receiverAccount || !transferAmount) {
      setErrorMessage('Please fill in all fields');
      return;
    }
// Convert sender and receiver account numbers to numbers
const senderAccountNumber = parseInt(senderAccount);
const receiverAccountNumber = parseInt(receiverAccount);

if (isNaN(senderAccountNumber) || isNaN(receiverAccountNumber)) {
  setErrorMessage('Invalid sender or receiver account');
  return;
}

const senderAccountObj = accounts.find((account) => account.accountNumber === senderAccountNumber);
const receiverAccountObj = accounts.find((account) => account.accountNumber === receiverAccountNumber);

if (!senderAccountObj || !receiverAccountObj) {
  setErrorMessage('Invalid sender or receiver account');
  return;
}

    const transferAmountFloat = parseFloat(transferAmount);
    if (isNaN(transferAmountFloat) || transferAmountFloat <= 0) {
      setErrorMessage('Invalid transfer amount');
      return;
    }

    if (senderAccountObj.clientBalance < transferAmountFloat) {
      setErrorMessage('Insufficient balance in the sender account');
      return;
    }

    // Update sender and receiver account balances
    const updatedSenderAccount = {
      ...senderAccountObj,
      clientBalance: senderAccountObj.clientBalance - transferAmountFloat,
    };

    const updatedReceiverAccount = {
      ...receiverAccountObj,
      clientBalance: receiverAccountObj.clientBalance + transferAmountFloat,
    };

    handleTransferMoney(updatedSenderAccount, updatedReceiverAccount);
    setSuccessMessage('Transfer successful');
  };

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
      <h2>Transfer</h2>
      <div>
        <label htmlFor="senderAccount">Select Sender Account: </label>
        <select
          id="senderAccount"
          onChange={(e) => setSenderAccount(e.target.value)}
          value={senderAccount}
        >
          <option value="">Select an account</option>
          {accounts.map((account) => (
            <option key={account.accountNumber} value={account.accountNumber}>
              {account.accountNumber}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="receiverAccount">Select Receiver Account: </label>
        <select
          id="receiverAccount"
          onChange={(e) => setReceiverAccount(e.target.value)}
          value={receiverAccount}
        >
          <option value="">Select an account</option>
          {accounts.map((account) => (
            <option key={account.accountNumber} value={account.accountNumber}>
              {account.accountNumber}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="transferAmount">Enter Transfer Amount: </label>
        <input
          type="number"
          id="transferAmount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          placeholder="Amount"
        />
      </div>

      <div>
      <button id='transfer-money' onClick={handleTransfer}><i className="fa-solid fa-money-bill-transfer"></i></button>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

export default TransferPage;

