// TransactionDetails.js
import React from 'react';
import '../components/TransactionsPage.css';
import { useState } from 'react';

function TransactionDetails({ type, accountName, amount,
  accountNumber, transactionNumber, transactionDate,
  transactionTime, isVisible, onClose }) {

  const visibilityStyle = isVisible ? 'visible' : 'hidden';
  const zIndexStyle = isVisible ? '999' : '-1';

  const modalStyle = {
    visibility: visibilityStyle,
    zIndex: zIndexStyle,
  };

  const closeTransactionDetails = () => {
    document.body.classList.remove('transaction-details-open'); // Remove the class when closing
    document.documentElement.classList.remove('transaction-details-open'); // Remove the class when closing
    console.log('Close button clicked'); 
    onClose(); 
  };


  return (

    <div className="transaction-details-container" style={modalStyle}>
      <div className='transaction-details-modal'>
      <table className='transaction-details-table'>
      <thead>
          <tr>
            <th colSpan="2">
              <div className="transaction-details-heading">
                <i className="fa-solid fa-receipt"></i>
                <h3>{type} Transaction Details</h3>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account Name:</td>
            <td>{accountName}</td>
          </tr>
          <tr>
            <td>Account Number:</td>
            <td>{accountNumber}</td>
          </tr>
          <tr>
            <td>Amount:</td>
            <td>{amount}</td>
          </tr>
          <tr>
            <td>Transaction Number:</td>
            <td>{transactionNumber}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{transactionDate}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{transactionTime}</td>
          </tr>
        </tbody>
      </table>
      <button id='close-transaction-details' onClick={closeTransactionDetails}>Close Transaction Details</button>
      </div>
    </div>
  );
}

export default TransactionDetails;
