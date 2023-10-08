import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewTransactions-Budgetapp.css'
import TransactionHistory from '../components/TransactionHistory';
import AccountBalance from '../components/AccountBalance';
import TransactionForm from '../components/TransactionForm';
import Header from '../components/Header';
import PieChartComponent from '../components/PieChart';

export default function NewTransactions() {
  
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0.00);

    const addTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
      
      setBalance(balance - newTransaction.amount);
    };
    const [totalTransactions, setTotalTransactions] = useState(0);
  
    useEffect (() => {
      let temp = 0;
      for (let i = 0; i < transactions.length; i++) {
        temp += parseInt(transactions[i].amount);
      }
  
      setTotalTransactions(temp);
    }, [transactions]);
 
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
        <h1>Bank of Avion School</h1>
      </div>
      <br />
      <br />
      <br />
      <div className='new-tranx'>
        <Header totalTransactions={totalTransactions}/>
        <AccountBalance balance={balance} setBalance={setBalance}/>
        <TransactionForm onAddTransaction={addTransaction} balance={balance} setBalance={setBalance}/>
        <TransactionHistory transactions={transactions} setTransactions={setTransactions}/>
        <PieChartComponent transactions={transactions}/>      
      </div>
    </div>
  );
};