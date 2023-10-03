// CreateAccountPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/CreateAccountPage.css';

function CreateAccountPage({ addAccount, accounts }) {
  // Initialize state to hold submitted account details
  const [accountDetails, setAccountDetails] = useState({
    firstName: '',
    lastName: '',
    clientBalance: '',
    userEmail: '',
    userPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
 
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

     // Check if an account with the same first and last name already exists
     const isDuplicate = accounts.some(
      (account) =>
        account.firstName.toUpperCase() === accountDetails.firstName.toUpperCase() &&
        account.lastName.toUpperCase() === accountDetails.lastName.toUpperCase()
    );

    if (isDuplicate) {
      setAccountDetails({
        firstName: '',
        lastName: '',
        clientBalance: '',
        userEmail: '',
        userPassword: '',
      })
      setErrorMessage('An account with the same first name and last name already exists.');
      return;
    }

  // Call the addAccount function to add the new account
  const accountAdded = addAccount(accountDetails);

  // Check if the account was added successfully, and clear the form if it was
  if (accountAdded) {
    setAccountDetails({
      firstName: '',
      lastName: '',
      clientBalance: '',
      userEmail: '',
      userPassword: '',
    });
  }
  };
  return (
    <div>
      <div id='create-account-logo'>
        <Link to="/">
          <img
            className='bankLogo'
            src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png'
            alt='Bank Logo'
          />
        </Link>
        <h1>Bank of Avion School of the Philippines</h1>
      </div>
      <br />
      <br />
      <br />

      <div id='create-account-form'>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            id='firstName'
            type='text'
            name='firstName'
            placeholder='First Name'
            pattern='[A-Za-z ]+'
            required
            value={accountDetails.firstName}
            onChange={(e) =>
              setAccountDetails({
                ...accountDetails,
                firstName: e.target.value,
              })
            }
          />{' '}
          <br />
          <input
            id='lastName'
            type='text'
            name='lastName'
            placeholder='Last Name'
            pattern='[A-Za-z ]+'
            required
            value={accountDetails.lastName}
            onChange={(e) =>
              setAccountDetails({
                ...accountDetails,
                lastName: e.target.value,
              })
            }
          />{' '}
          <br />
          <input
            id='clientBalance'
            type='number'
            name='clientBalance'
            placeholder='Deposit Amount'
            min='500.00'
            pattern='^[0-9]+(\.[0-9]{2})?$'
            required
            value={accountDetails.clientBalance}
            onChange={(e) =>
              setAccountDetails({
                ...accountDetails,
                clientBalance: e.target.value,
              })
            }
          />{' '}
          <br />
          <input
            id='userEmail'
            type='email'
            name='userEmail'
            placeholder='Enter user email address'
            required
            value={accountDetails.userEmail}
            onChange={(e) =>
              setAccountDetails({
                ...accountDetails,
                userEmail: e.target.value,
              })
            }
            />{' '}<br/>
            <input 
            id='userPassword'
            name='userPassword'
            placeholder='Enter user Password'
            required
            value={accountDetails.userPassword}
            onChange={(e) =>
              setAccountDetails({
                ...accountDetails,
                userPassword: e.target.value,
              })
            }
            />{''}<br/>
          <button id='submitAccount' type='submit' name='submit' value='Submit'>
            Submit
          </button>
        </form>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default CreateAccountPage;
