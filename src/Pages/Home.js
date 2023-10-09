import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css'


export default function Home({ balance }) {

  const [currentMonthYear, setCurrentMonthYear] = useState('');

  const getCurrentMonthYear = () => {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('default', {day: '2-digit'});
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    return `${currentMonth} ${currentDay}, ${currentYear}`;
  };

  useEffect(() => {
    setCurrentMonthYear(getCurrentMonthYear());
  }, []);
  

  return (
    <div className="mainPage">
      <Link to="/">
        <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo' />
      </Link>
      <h1>Bank of Avion School</h1>
      <p className='today'>Today: <strong> {currentMonthYear} </strong> </p>
      <div className="dashBoard">
        <div className="greetings">Greetings!</div>
        <div className="userAccount">Accounts
          <div className='dashboard-container'>
            <Link to="/accounts">
              <button id='userAccounts' className='user-account-btn'><i className="fa-solid fa-users"></i></button>
            </Link>
          </div>
        </div>
        <div className="createAccount">Create Account
          <div id='createAccount' className='create-ccount-button dashboard-container'>
            <Link to="/create-account">
              <button id='create-account-btn' className='create-account-btn'><i className="fa-solid fa-user-plus"></i></button>
            </Link>
          </div>
        </div>
        <div className="transactions">Transactions
          <div className='transaction-buttons'>
            <Link to="/transactions">
              <button id="deposit-withdraw-btn" className='trans-button'><i className="fa-solid fa-wallet"></i>Deposit/Withdraw</button>
            </Link>
            <NavLink to="/transfer">
              <button id="transfer-btn" className='trans-button'><i className="fa-solid fa-money-bill-transfer"></i>Transfer</button>
            </NavLink>
          </div>
        </div>
        <div className="addFeatures">Budget/Expense Tracker
        <Link to="/new-transactions">
          <button className='add-transactions'>New Transaction</button>
          </Link>
        </div>
        </div>
      </div>
  );
};
