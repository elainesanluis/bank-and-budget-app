import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';
import logo from '../images/logo.png';

function Home({ accounts }) {
  const [totalBalance, setTotalBalance] = useState(0);
  const calculateTotalBalance = () => {
    // Calculate the total balance by summing up the client balances of all accounts
    const sum = accounts.reduce((total, account) => total + parseFloat(account.clientBalance), 0);
    setTotalBalance(sum);
  };

  useEffect(() => {
    calculateTotalBalance();
  }, [accounts]);

  const formattedTotalBalance = totalBalance.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  
  
  return (
    <div className="mainPage">
      <Link to="/">
        <img className='bankLogo' src={logo} alt='Bank Logo' />
      </Link>
      <h1>Bank of Avion School</h1>
      <div className="dashBoard">
        <div className="greetings">
          <h2>
        Total Savings: <span className='totalbalance'> ${formattedTotalBalance}</span>
        </h2>
       </div>
        <div className="userAccount">Accounts
          <div className='dashboard-container'>
            <Link to="/accounts">
              <button id='userAccounts' className='user-account-btn'><i className="fa-solid fa-users home-icons"></i></button>
            </Link>
          </div>
        </div>
        <div className="createAccount">Create Account
          <div id='createAccount' className='create-ccount-button dashboard-container'>
            <Link to="/create-account">
              <button id='create-account-btn' className='create-account-btn'><i className="fa-solid fa-user-plus home-icons"></i></button>
            </Link>
          </div>
        </div>
        <div className="transactions">Transactions
          <div className='transaction-buttons'>
            <Link to="/transactions">
              <button id="deposit-withdraw-btn" className='trans-button'><i className="fa-solid fa-wallet home-icons"></i>Deposit/Withdraw</button>
            </Link>
            <Link to="/transfer">
              <button id="transfer-btn" className='trans-button'><i className="fa-solid fa-money-bill-transfer home-icons"></i>Transfer</button>
            </Link>
          </div>
        </div>
        <div className="addFeatures">Other Services
          <div className='add-features-button'>
            <Link to="/otherservices">
            <button id='features' className='addfeatures-btn'><i className="fa-solid fa-rectangle-list home-icons"></i></button>
            </Link>
        </div>
        </div>
        <div>
        </div>
        <div className="budgetApp">Budget App
        <i className="fa-solid fa-calculator"></i></div>
      </div>
    </div>
  );
}

export default Home;
