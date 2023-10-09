// OtherServices.js 
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../Pages/OtherServices.css';
import '../Pages/TransactionLogs.css';
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
  
// Retrieve logs from local storage
const storedLogs = JSON.parse(localStorage.getItem('transactionLogs')) || [];
const fromDateObj = new Date(fromDate);
const toDateObj = new Date(toDate);

const filteredLogs = storedLogs.filter((log) => {
const logDate = new Date(log.date);
// Adjust the comparison to consider the entire day
  return (
    (log.account === accountNumber || log.senderAccount === accountNumber || log.receiverAccount === accountNumber) &&
    logDate >= fromDateObj && logDate <= toDateObj
  );
});

if (filteredLogs.length === 0) {
  setErrorMessage('No transaction logs found for the specified account and date range.');
  setIsModalOpen(false);
} else {
  setLogs(filteredLogs);
  setIsModalOpen(true);
  setErrorMessage('');
}

}
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
            <TransactionLogs logs={logs} onClose={closeModal} 
             />
          </div>
        </div>
      )}
    </div>
    )
}

export default OtherServices;