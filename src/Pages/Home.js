import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';
import logo from '../images/logo.png';

function Home() {
  return (
    <div className="mainPage">
      <Link to="/">
        <img className='bankLogo' src={logo} alt='Bank Logo' />
      </Link>
      <h1>Bank of Avion School</h1>
      <div className="dashBoard">
        <div className="greetings">Greetings!</div>
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
        <div className="budgetApp">Budget App</div>
      </div>
    </div>
  );
}

export default Home;
