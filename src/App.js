
import './App.css';

function App() {
  return (
    <div className="mainPage">
      <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo'></img>
      <h1>Bank of Avion School of the Philippines</h1>
      <div className="dashBoard">
        <div className="greetings">Greetings!</div>
        <div className="userAccount">Accounts
        <div className='dashboard-container'>
          <button id='userAccounts' className='user-account-btn'><i class="fa-solid fa-users"></i></button>
        </div>
        </div>
        <div className="createAccount">Create Account
        <div className='create-ccount-button dashboard-container'>
          <button id='create-account-btn' className='create-account-btn'><i className="fa-solid fa-user-plus"></i></button>
        </div>
        </div>
        <div className="transactions">Transactions
        <div className='transaction-buttons'>
        <button id="deposit-withdraw-btn" className='trans-button'><i className="fa-solid fa-wallet"></i>Deposit/Withdraw</button>
        <button id="transfer-btn" className='trans-button'><i className="fa-solid fa-money-bill-transfer"></i>Transfer</button>
        </div>
        </div>
        <div className="addFeatures">Additional Features
        <div className='add-features-button'>
          <button className='addfeatures-btn'><i class="fa-solid fa-gift"></i></button>
        </div>
        </div>
        <div className="budgetApp">Budget App</div>
    </div>
    </div>
  );
}

export default App;
