// TransferPage.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../Pages/TransferPage.css';
import { generateTransactionNumber } from '../components/TransactionNumber'; 

function TransferPage({accounts, handleTransferMoney, updateTransactionDetails }) {
  
  const [senderAccount, setSenderAccount] = useState('');
  const [receiverAccount, setReceiverAccount] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [transactionDetails, setTransactionDetails] = useState(null);

  const handleTransfer = () => {
    const transactionNumber = generateTransactionNumber('Transfer');

    if (!senderAccount || !receiverAccount || !transferAmount) {
      setErrorMessage('Please fill in all fields');
      setSuccessMessage('');
      setTransactionDetails(null); 
      return;
    }
// Convert sender and receiver account numbers to numbers
const senderAccountNumber = parseInt(senderAccount);
const receiverAccountNumber = parseInt(receiverAccount);

//Checking if account number is not a valid number
if (isNaN(senderAccountNumber) || isNaN(receiverAccountNumber)) {
  setErrorMessage('Invalid sender or receiver account');
  setSuccessMessage('');
  setTransactionDetails(null);
  return;
}

const senderAccountObj = accounts.find((account) => account.accountNumber === senderAccountNumber);
const receiverAccountObj = accounts.find((account) => account.accountNumber === receiverAccountNumber);

if (!senderAccountObj || !receiverAccountObj) {
  setErrorMessage('Invalid sender or receiver account');
  setSuccessMessage('');
  setTransactionDetails(null);
  return;
}
//Ensures that the transferAmount is both a valid numeric value and greater than zero
const transferAmountFloat = parseFloat(transferAmount);
  if (isNaN(transferAmountFloat) || transferAmountFloat <= 0) {
      setErrorMessage('Invalid transfer amount');
      setTransactionDetails(null);
      setSuccessMessage('');
      return;
    }

    if (senderAccountObj.clientBalance < transferAmountFloat) {
      setErrorMessage('Insufficient balance in the sender account');
      setTransactionDetails(null); 
      setSuccessMessage('');
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

    setTransactionDetails({
      type: 'Transfer',
      senderAccount: `${senderAccountObj.firstName} ${senderAccountObj.lastName}`,
      receiverAccount: `${receiverAccountObj.firstName} ${receiverAccountObj.lastName}`,
      amount: transferAmountFloat,
      transactionNumber,
    });

  // Clear input fields after successful transfer
  setSenderAccount('');       // Clear sender account input
  setReceiverAccount('');     // Clear receiver account input
  setTransferAmount('');      // Clear transfer amount input

    updateTransactionDetails(
      'Transfer',
      senderAccountObj.firstName,
      receiverAccountObj.firstName,
      transferAmountFloat,
      transactionNumber
    );
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
      <button id='transfer-money' onClick={handleTransfer}>Transfer</button>
      </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {transactionDetails && (
        <div className="transaction-details">
          <p>Transaction Type: {transactionDetails.type}</p>
          <p>Sender: {transactionDetails.senderAccount}</p>
          <p>Receiver: {transactionDetails.receiverAccount}</p>
          <p>Amount: {transactionDetails.amount}</p>
          <p>Transaction Number: {transactionDetails.transactionNumber}</p>
        </div>
      )}
    </div>
  );
}

export default TransferPage;

