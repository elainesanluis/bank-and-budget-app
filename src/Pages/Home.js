import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="mainPage">
      <Link to="/">
        <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo' />
      </Link>
      <h1>Bank of Avion School of the Philippines</h1>
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
        <div className="addFeatures">Additional Features
          <div className='add-features-button'>
            <button id='features' className='addfeatures-btn'><i className="fa-solid fa-gift"></i></button>
          </div>
        </div>
        <div className="budgetApp">Budget App</div>
      </div>
    </div>
  );
}

export default Home;