import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountsPage from './Pages/AccountsPage';
import CreateAccountPage from './Pages/CreateAccountPage';
import TransactionsPage from './Pages/TransactionsPage';
import TransferPage from './Pages/TransferPage';
import Home from './Pages/Home';
import NewTransactions from './Pages/NewTransactions-BudgetApp';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route
          path="/new-transactions"
          element={
            <>
              <NewTransactions onAddTransaction={addTransaction} />
              <div>
                <h3>Transaction History</h3>
                <ul>
                  {transactions.map((transaction) => (
                    <li key={transaction.id}>
                      {transaction.text} ({transaction.amount})
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

export const accounts = [
  { firstName: 'John', lastName: 'Doe', client1Balance: 1000 },
  { firstName: 'Jane', lastName: 'Doe', client1Balance: 500 },
];

export const addAccount = (account) => {
  accounts.push(account);
};