import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewTransactions-Budgetapp.css';

export default function NewTransactions({ onAddTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [owner, setOwner] = useState('');
  const [selectCategory, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000), // Generate a unique ID (may use a library for this)
      text,
      amount: +amount, // Convert to a number
      owner,
      selectCategory,
    };

    onAddTransaction(newTransaction);

    // Clear the input fields
    setText('');
    setAmount('');
    setOwner('');
    setCategory('');
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
          <label htmlFor="text">Name of Expense: </label>
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
          <label htmlFor="selectCategory">Category: </label>
          <select
          id="selectCategory"
          value={selectCategory}
          onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>Please select...</option>
            <option value="Food and Drinks">Food and Drinks</option>
            <option value="Transportation">Transportation</option>
            <option value="Groceries">Groceries</option>
            <option value="Communications">Communications</option>
            <option value="Utilities">Utilities</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Shopping">Shopping</option>
            <option value="Holidays">Holidays</option>
            <option value="Investments">Investments</option>
            <option value="Subscriptions">Subscriptions</option>
          </select>
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
        <div className="form-control">
          <label htmlFor="owner">Owner/Payee: </label>
          <input
            type="text"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

