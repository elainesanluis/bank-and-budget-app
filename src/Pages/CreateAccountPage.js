// AccountsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function CreateAccountPage() {
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
    <form>
        <input id='firstName' type='text' name='firstName' placeholder='First Name' pattern='[A-Za-z ]+' required/> <br />
        <input id='lastName' type='text' name='lastName' placeholder='Last Name' pattern='[A-Za-z ]+' required/> <br />
        <input id='client1Balance' type='number' name='client1Balance' placeholder='Deposit Amount' min='500.00' pattern='^[0-9]+(\.[0-9]{2})?$' required/> <br />
        <input id='submitAccount' type='submit' name='submit' value='Submit'/>
    </form>
    </div>
    </div>
  );
}

export default CreateAccountPage;
