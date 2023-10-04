import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewTransactions-Budgetapp.css';
export const balance = 0.0;

export default function NewTransactions({ onAddTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [owner, setOwner] = useState('');
  const [selectCategory, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000), // Generate a unique ID (may use a library for this)
      text,
      amount: +amount, // Convert to a number
      owner,
      selectCategory,
      date,
    };

    onAddTransaction(newTransaction);

    // Clear the input fields
    setText('');
    setAmount('');
    setOwner('');
    setCategory('');
    setDate('');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState(0);
  const [balance, setBalance] = useState(0.00);

  // Define functions to open and close the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to add the amount to the balance
  const addToBalance = () => {
    setBalance(balance + amountToAdd);
    closeModal(); // Close the modal after adding the amount
  };

  //  Modal component
  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null; // Don't render the modal if it's closed
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <p>Enter an amount:</p>
          <input
            type="number"
            defaultValue={amountToAdd}
            onChange={(e) => setAmountToAdd(parseFloat(e.target.value))}
          />
          <button onClick={addToBalance}>Add to Balance</button>
        </div>
      </div>
    );
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
        <div className="form-control">
          <label htmlFor="date">Date: </label>
          <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
      <div className='Account Balance'>
          <p>Account Balance: &#8369;{balance.toFixed(2)}</p>
          <button className='addBudget' onClick={openModal}>Add budget</button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}