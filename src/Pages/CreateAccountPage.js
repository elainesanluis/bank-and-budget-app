// AccountsPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateAccountPage() {
     // Initialize state to hold submitted account details
  const [accountDetails, setAccountDetails] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [client1Balance, setClient1Balance] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    // Create an object with the submitted data
    const newAccount = {
      firstName,
      lastName,
      client1Balance
    };
    console.log('New account data:', newAccount);

    // Add the new account to the state
    setAccountDetails(newAccount);

    // Clear the form inputs
    setFirstName('');
    setLastName('');
    setClient1Balance('');
  };

  return (
    <div>
    <div id='create-account-logo'>
    <Link to="/">
        <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo' />
      </Link>
      <h1>Bank of Avion School of the Philippines</h1>
    </div>
    <br/>
    <br/>
    <br/>
        
    <div id='create-account-form'>
      <h2>Create Account</h2>
    <form onSubmit={handleSubmit}>
        <input id='firstName' type='text' name='firstName' placeholder='First Name' pattern='[A-Za-z ]+' required onChange={(e) => setFirstName(e.target.value)}/> <br />
        <input id='lastName' type='text' name='lastName' placeholder='Last Name' pattern='[A-Za-z ]+' required onChange={(e) => setLastName(e.target.value)}/> <br />
        <input id='client1Balance' type='number' name='client1Balance' placeholder='Deposit Amount' min='500.00' pattern='^[0-9]+(\.[0-9]{2})?$' required onChange={(e) => setClient1Balance(e.target.value)}/> <br />
        <input id='submitAccount' type='submit' name='submit' value='Submit'/>
    </form>
    </div>
    </div>
  );
}

export default CreateAccountPage;
