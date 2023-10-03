// TransferPage.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../Pages/TransferPage.css';

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
//Checking if account number is not a valid number
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
//Ensures that the transferAmount is both a valid numeric value and greater than zero
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
      <div className="transfer-container">
        <div>
        <label htmlFor="senderAccount">Sender Account: </label><br />
        <input
        type='text'
          id="senderAccount"
          onChange={(e) => setSenderAccount(e.target.value)}
          value={senderAccount}
          placeholder='sender account number'
       />
      </div>

      <div>
        <label htmlFor="receiverAccount">Receiver Account: </label><br />
        <input
        type='text'
          id="receiverAccount"
          onChange={(e) => setReceiverAccount(e.target.value)}
          value={receiverAccount}
          placeholder='receiver account number'
        ></input>
      </div>
      <div>
        <label htmlFor="transferAmount">Transfer Amount: </label><br />
        <input
          type="text"
          id="transferAmount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          placeholder="Amount"
        />
      </div>

      <div>
      <br />
      <button id='transfer-money' onClick={handleTransfer}>Submit</button>
      </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

export default TransferPage;

