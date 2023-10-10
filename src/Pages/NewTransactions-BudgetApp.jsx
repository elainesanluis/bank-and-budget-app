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
  const [totalTransactions, setTotalTransactions] = useState(0);

    const addTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
      setBalance(balance - newTransaction.amount);
    };
  
    useEffect (() => {
      let temp = 0;
      for (let i = 0; i < transactions.length; i++) {
        temp += parseInt(transactions[i].amount);
      }
  
      setTotalTransactions(temp);
    }, [transactions]);
 

  return (
    <div>
      <div id='back-to-home'>
        <Link style={{textDecoration: 'none', fontSize: '30px'}} to="/">
          <p className='dashboard'><i class="fa-solid fa-house"></i></p>
        </Link>
      </div>
      <div className='new-tranx'>
        <Header totalTransactions={totalTransactions}/>
        <AccountBalance balance={balance} setBalance={setBalance}/>
        <TransactionForm onAddTransaction={addTransaction} balance={balance} setBalance={setBalance}/>
        {transactions.length > 0 ? (
          <TransactionHistory transactions={transactions} setTransactions={setTransactions} />
        ) : null}
        {transactions.length > 0 ? (
        <PieChartComponent transactions={transactions}/>
        ) : null}
      </div>
    </div>
  );
};