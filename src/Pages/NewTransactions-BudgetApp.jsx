// TransactionsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NewTransactions-Budgetapp.css';

function NewTransactions({ onAddTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000), // Generate a unique ID (you may want to use a library for this)
      text,
      amount: +amount, // Convert to a number
    };

    onAddTransaction(newTransaction);

    // Clear the input fields
    setText('');
    setAmount('');
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount (negative for expense, positive for income)</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default NewTransactions;

