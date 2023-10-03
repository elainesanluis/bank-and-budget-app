import React, { useState } from 'react';
import TransactionForm from './TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1>My Budget App</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      {/* Display the list of transactions */}
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
    </div>
  );
}

export default App;
