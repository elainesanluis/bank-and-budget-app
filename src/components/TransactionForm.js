import React, { useState } from "react";

export default function TransactionForm ({ onAddTransaction, balance, setBalance }) {

const [text, setText] = useState('');
const [amount, setAmount] = useState('');
const [owner, setOwner] = useState('');
const [selectCategory, setCategory] = useState('');
const [date, setDate] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  const newTransaction = {
    id: Math.floor(Math.random() * 1000000),
    text,
    amount: +amount,
    owner,
    selectCategory,
    date,
  };

  setBalance(balance - newTransaction.amount);

  onAddTransaction(newTransaction);

  setText('');
  setAmount('');
  setOwner('');
  setCategory('');
  setDate('');
};


return (
    <>
<div className="div-newtranx">
        <h3 className="title-newtranx">New Transaction</h3>
        <form className="form-newtranx" onSubmit={handleSubmit}>
        <div className="form-control">
          {/* <label id="label1" htmlFor="text">Name of Expense: </label> */}
          <input
          className="box"
            type="text"
            id="name-of-tranx"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder=" Enter expense description..."
            required
          />
        </div>
        <div className="form-control">
          {/* <label id="label2" htmlFor="selectCategory">Category: </label> */}
          <select
          className="box"
          id="selectCategory"
          value={selectCategory}
          onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled> Please select category...</option>
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
          {/* <label id="label3" htmlFor="amount">Amount: </label> */}
          <input
            className="box"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder=" Enter amount..."
            required
          />
        </div>
        <div className="form-control">
          {/* <label id="label4" htmlFor="owner">Owner/Payee: </label> */}
          <input
            className="box"
            type="text"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            placeholder=" Enter Owner/Payee..."
            required
          />
        </div>
        <div className="form-control">
          {/* <label id="label5" htmlFor="date">Date: </label> */}
          <input
          className="box"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          />
        </div>
        <button className="btn-newtranx">Add Transaction</button>
        </form>
      </div>
      </>
);
};