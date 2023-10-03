import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewTransactions-Budgetapp.css';

export default function NewTransactions({ onAddTransaction }) {
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
    <div id='create-account-logo'>
      <Link to="/">
        <img
          className='bankLogo'
          src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png'
          alt='Bank Logo'
        />
      </Link>
      <h1>Bank of Avion School of the Philippines</h1>
    </div>
    <br />
    <br />
    <br />

      <h3>New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
        <button className="income-budget">INCOME</button>
        <button className="expense-budget">EXPENSE</button><br></br>
          <label htmlFor="text">Name of : </label>
          <input
            type="text"
            id="name-of-tranx"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount: </label>
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

