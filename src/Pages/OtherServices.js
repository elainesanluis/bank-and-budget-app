// OtherServices.js 
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../Pages/OtherServices.css';

function OtherServices({accounts}) {
const [accountNumber, setAccountNumber] = useState('');
const [fromDate, setFromDate] = useState('');
const [toDate, setToDate] = useState('');
const handleLogRequest = () => {
    // Perform the logic to fetch transaction logs for the specified account
    // and date range (fromDate to toDate).
    // This information can be used to display the transaction logs.
    console.log('Account Number:', accountNumber);
    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);
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
            </div>
        </div>
    </div>
    )
}

export default OtherServices;