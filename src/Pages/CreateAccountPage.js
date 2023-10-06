// CreateAccountPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Styles.css';

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
  const [succesMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

     // Check if an account with the same first and last name already exists
     const isDuplicate = accounts.some(
      (account) =>
        account.firstName.toUpperCase() === accountDetails.firstName.toUpperCase() &&
        account.lastName.toUpperCase() === accountDetails.lastName.toUpperCase() ||
        account.userEmail.toUpperCase() === accountDetails.userEmail.toUpperCase()
    );

    if (isDuplicate) {
      setAccountDetails({
        firstName: '',
        lastName: '',
        clientBalance: '',
        userEmail: '',
        userPassword: '',
      })
      setErrorMessage('An account with the same name or email already exists. Please try again');
      setSuccessMessage('');
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
    setSuccessMessage('Account has been created successfully.')
    setErrorMessage('');
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
        <h2 className='page-heading'>Create Account</h2>
        <form id='create-form' onSubmit={handleSubmit}>
          <label htmlFor='firstName' className='createAccountLabel'>First Name: </label><br />
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
          <label htmlFor='lastName' className='createAccountLabel'>Last Name: </label><br />
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
          <label htmlFor='clientBalance' className='createAccountLabel'>Deposit Amount: </label><br />
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
          <label htmlFor='userEmail' className='createAccountLabel'>Email Address: </label><br />
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
            <label htmlFor='userPassword' className='createAccountLabel'>Password: </label><br />
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
            <br />
          <button id='submitAccount' type='submit' name='submit' value='Submit'>
            Submit
          </button>
        </form>
      </div>
      {succesMessage && <div className="success-message">{succesMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default CreateAccountPage;
