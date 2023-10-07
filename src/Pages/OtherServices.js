// OtherServices.js 
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../Pages/OtherServices.css';
import TransactionLogs from '../Pages/TransactionLogs'; 

function OtherServices() {
const [accountNumber, setAccountNumber] = useState('');
const [fromDate, setFromDate] = useState('');
const [toDate, setToDate] = useState('');
const [logs, setLogs] = useState([]); 
const [isModalOpen, setIsModalOpen] = useState(false); 
const [errorMessage, setErrorMessage] = useState('');

const handleLogRequest = () => {

    // Check if the input fields are empty
    if (!accountNumber || !fromDate || !toDate) {
        setErrorMessage('Please input account number and transaction date coverage.');
        return; // Don't proceed with fetching logs
      }

      const fetchedLogs = [{
        date: '2023-10-01',
        type: 'Deposit',
        account: '100112345679',
        amount: 100,
        transactionNumber: 'TXN12345',
      },
      {
        date: '2023-10-02',
        type: 'Withdraw',
        account: '100112345679',
        amount: 50,
        transactionNumber: 'TXN12346',
      },
    ]; 
    const filteredLogs = fetchedLogs.filter((log) => {
        return (
          log.account === accountNumber &&
          log.date >= fromDate &&
          log.date <= toDate
        );
      });
  setLogs(filteredLogs);
  setIsModalOpen(true);
  setErrorMessage('');
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

return (
<div>
    <div>
        <Link to="/">
        <img className='bankLogo' src={logo} alt='Bank Logo' />
        </Link>  
        <h1>Bank of Avion School</h1>
        </div>
    <br/>
    <br/>
    <div id='other-services' className='other-services'>
    <h2 className='page-heading'>Other Services</h2>
    <div className='other-services-container'>
    <h3 className='transaction-logs-heading'>Transaction Logs</h3>
    <label htmlFor="accountNumber" className='transaction-logs-label'>Account Number:</label>
      <input
        type="text"
        id="accountNumber"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <div>
        <label htmlFor="fromDate" className='transaction-logs-label'>From Date:</label>
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="toDate" className='transaction-logs-label'>To Date:</label>
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>
      <br/>
      <button id="transaction-log-submit" onClick={handleLogRequest}>
        Get Transaction Logs
      </button>
      {errorMessage && (
            <p className="error-message-otherservices">{errorMessage}</p>
          )}
            </div>
        </div>
        {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <TransactionLogs logs={logs} />
          </div>
        </div>
      )}
    </div>
    )
}

export default OtherServices;