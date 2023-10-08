// AccountsPage.js
import React from 'react';
import './AccountsPage.css';
import { Link } from 'react-router-dom';
import { accounts } from '../App'; 

function AccountsPage({ accountDetails }) {
  return (
    <div>
      <div id='create-account-logo'>
        <Link to="/">
          <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo' />
        </Link>
        <h1>Bank of Avion School</h1>
      </div>
      <br />
      <br />
      <br />

      <h2>Accounts Page</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Deposit Amount</th>
          </tr>
        </thead>
        <tbody>
        {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.firstName}</td>
              <td>{account.lastName}</td>
              <td>{account.client1Balance}</td>
            </tr>
          ))}
           
            <tr>
              <td colSpan="3">No accounts to display</td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default AccountsPage;
