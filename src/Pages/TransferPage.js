// TransferPage.js
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../Pages/TransferPage.css';
import { generateTransactionNumber } from '../components/TransactionNumber'; 
import TransferDetailsModal from '../Pages/TransferDetailsModal'; 
import logo from '../images/logo.png';

function TransferPage({accounts, handleTransferMoney, updateTransactionDetails }) {
  
  const [senderAccount, setSenderAccount] = useState('');
  const [receiverAccount, setReceiverAccount] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [transactionDetails, setTransactionDetails] = useState(null);
  
  useEffect(() => {
    // Initialize local storage for transaction logs if not present
    if (!localStorage.getItem('transactionLogs')) {
      localStorage.setItem('transactionLogs', JSON.stringify([]));
    }
  }, []);

  const handleTransfer = () => {
    const transactionNumber = generateTransactionNumber('Transfer');
    const currentDate = new Date();
    const transactionTime = currentDate.toLocaleTimeString();
    const transactionDate = currentDate.toLocaleDateString();
    

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
// Find sender and receiver account objects
const senderAccountObj = accounts.find((account) => account.accountNumber === senderAccountNumber);
const receiverAccountObj = accounts.find((account) => account.accountNumber === receiverAccountNumber);
 // Check if sender and receiver accounts are valid
if (!senderAccountObj || !receiverAccountObj) {
  setErrorMessage('Invalid sender or receiver account');
  setSuccessMessage('');
  setTransactionDetails(null);
  return;
}
//Ensure that the transferAmount is both a valid numeric value and greater than zero
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
    } else {
      setSuccessMessage('Transfer succesful!');
      setErrorMessage('');
      setTransactionDetails({
        type: 'Transfer',
        senderAccount: `${senderAccountObj.firstName} ${senderAccountObj.lastName}`,
        receiverAccount: `${receiverAccountObj.firstName} ${receiverAccountObj.lastName}`,
        amount: transferAmountFloat,
        transactionNumber,
        transactionDate,
        transactionTime,
      });
}

// Create a new transaction log object
const transactionLog = {
  date: transactionDate,
  time: transactionTime,
  type: 'Transfer',
  senderAccount: senderAccountObj.accountNumber,
  receiverAccount: receiverAccountObj.accountNumber,
  amount: transferAmountFloat,
  transactionNumber,
};

// Retrieve existing logs from local storage or initialize an empty array
const storedLogs = JSON.parse(localStorage.getItem('transactionLogs')) || [];
// Update the logs with the new transaction log
const updatedLogs = [...storedLogs, transactionLog];
// Save the updated logs back to local storage
localStorage.setItem('transactionLogs', JSON.stringify(updatedLogs));

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
    setSuccessMessage('Transfer successful!');

// Clear input fields after successful transfer
setSenderAccount('');      
setReceiverAccount('');    
setTransferAmount('');      

updateTransactionDetails(
      'Transfer',
      senderAccountObj.firstName,
      receiverAccountObj.firstName,
      transferAmountFloat,
      transactionNumber,
      transactionTime,
      transactionDate,
    );

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
    <br/>
      <h2 className='page-heading'>Transfer</h2>
      <div className="transfer-container">
        <div>
        <label htmlFor="senderAccount" className='transferpage-label'>Sender Account: </label><br />
        <input
        type='text'
          id="senderAccount"
          onChange={(e) => setSenderAccount(e.target.value)}
          value={senderAccount}
          placeholder='sender account number'
       />
      </div>

      <div>
        <label htmlFor="receiverAccount" className='transferpage-label'>Receiver Account: </label><br />
        <input
        type='text'
          id="receiverAccount"
          onChange={(e) => setReceiverAccount(e.target.value)}
          value={receiverAccount}
          placeholder='receiver account number'
        ></input>
      </div>
      <div>
        <label htmlFor="transferAmount" className='transferpage-label'>Transfer Amount: </label><br />
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
      <TransferDetailsModal
        type={transactionDetails?.type}
        senderAccount={transactionDetails?.senderAccount}
        receiverAccount={transactionDetails?.receiverAccount}
        amount={transactionDetails?.amount}
        transactionNumber={transactionDetails?.transactionNumber}
        transactionDate={transactionDetails?.transactionDate}
        transactionTime={transactionDetails?.transactionTime}
        isVisible={transactionDetails !== null}
        onClose={() => setTransactionDetails(null)}
      />
    </div>
  );
}

export default TransferPage;

