
import './App.css';

function App() {
  return (
    <div className="mainPage">
      <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo'></img>
      <h1>Bank of Avion School of the Philippines</h1>
      <div className="dashBoard">
        <div className="greetings">Greetings!</div>
        <div className="userAccount">Accounts</div>
        <div className="createAccount">Create Account</div>
        <div className="transactions">Transactions
        <button id="deposit-withdraw-btn"><i className="fa-solid fa-wallet"></i><p className="deposit-withdraw">Deposit/Withdraw</p></button>
        <button id="transfer-btn"><i className="fa-solid fa-money-bill-transfer"><p className="transfer">Transfer</p></i></button>
        </div>
        <div className="addFeatures">Additional Features</div>
        <div className="budgetApp">Budget App</div>
    </div>
    </div>
  );
}

export default App;
