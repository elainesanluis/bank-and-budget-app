// AccountsPage.js
import React from 'react';
import './AccountsPage.css';
import { Link } from 'react-router-dom';
import '../components/layout.css';

function AccountsPage({ accounts }) {
  return (
    <div>
      <div id='create-account-logo'>
        <Link to="/">
          <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo' />
        </Link>
        <h1>Bank of Avion School of the Philippines</h1>
      </div>
      <br />
      <br />
      <br />
<div className='account-container'>
      <h2>Accounts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Account Balance</th>
            <th>Account Number</th>
            <th>Date Created</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.firstName}</td>
              <td>{account.lastName}</td>
              <td>{account.clientBalance}</td>
              <td>{account.accountNumber}</td>
              <td>{account.createdAt.toLocaleDateString()}</td>
              <td>{account.userEmail}</td>
            </tr>
          ))}

        </tbody>
      </table>
      </div>
    </div>
  );
}

export default AccountsPage;
