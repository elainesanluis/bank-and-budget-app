// CreateAccountPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addAccount } from '../App'; 

function CreateAccountPage() {
  // Initialize state to hold submitted account details
  const [accountDetails, setAccountDetails] = useState({
    firstName: '',
    lastName: '',
    client1Balance: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    addAccount(accountDetails);

    // Clear the form inputs
    setAccountDetails({
      firstName: '',
      lastName: '',
      client1Balance: '',
    });
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
        <h1>Bank of Avion School</h1>
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
            id='client1Balance'
            type='number'
            name='client1Balance'
            placeholder='Deposit Amount'
            min='500.00'
            pattern='^[0-9]+(\.[0-9]{2})?$'
            required
            value={accountDetails.client1Balance}
            onChange={(e) =>
              setAccountDetails({
                ...accountDetails,
                client1Balance: e.target.value,
              })
            }
          />{' '}
          <br />
          <button id='submitAccount' type='submit' name='submit' value='Submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
