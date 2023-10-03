// WithdrawForm.js
import React, { useState } from 'react';

function WithdrawForm({ accounts, onWithdraw }) {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [transactionNumber, setTransactionNumber] = useState(1);
  const [accountNumber, setAccountNumber] = useState('');
  const [succesMessage,setSuccessMessage] = useState('');



  const handleWithdraw = () => {
    // if (selectedAccount && withdrawAmount >= 0) {
    //   onWithdraw(selectedAccount, parseFloat(withdrawAmount));
    const selectedAccount = accounts.find((account) => account.accountNumber === parseInt(accountNumber)); 

      if(!selectedAccount) {
        setErrorMessage('Account not found. Please enter a valid account Number.');
      }

      if (withdrawAmount >= 0 && withdrawAmount <= selectedAccount.clientBalance) {
        onWithdraw(selectedAccount.firstName, parseFloat(withdrawAmount));
        setShowModal(true);


      setAccountNumber('');
      setWithdrawAmount('');
      setSuccessMessage('Withdrawal Successful!')
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
      <div className='withdraw-container'>
      <input
      type="number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Enter account number"
      />
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Enter withdrawal amount"
      />
      <button id='withdraw-money' onClick={handleWithdraw}>Withdraw</button>
      {succesMessage && <div className="success-message">{succesMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default WithdrawForm;
