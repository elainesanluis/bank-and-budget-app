//App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountsPage from './Pages/AccountsPage';
import CreateAccountPage from './Pages/CreateAccountPage';
import TransactionsPage from './Pages/TransactionsPage';
import TransferPage from './Pages/TransferPage';
import Home from './Pages/Home';
import DepositFormPage from './Pages/DepositForm';
import WithdrawFormPage from './Pages/WithdrawForm';


function App() {
  const [accountList, setAccountList] = useState([
    { firstName: 'Doe', lastName: 'Adeer', clientBalance: 500, accountNumber: 100112345679, createdAt: new Date() },
    { firstName: 'Afemale', lastName: 'Deer', clientBalance: 500, accountNumber: 100112345680, createdAt: new Date() },
    { firstName: 'Rey', lastName: 'Adrop', clientBalance: 500, accountNumber: 100112345681, createdAt: new Date() },
    { firstName: 'Ofgolden', lastName: 'Sun', clientBalance: 500, accountNumber: 100112345682, createdAt: new Date() },
    { firstName: 'John', lastName: 'Doe', clientBalance: 1000, accountNumber: 100112345683, createdAt: new Date() },
    { firstName: 'Jane', lastName: 'Doe', clientBalance: 500, accountNumber: 100112345684, createdAt: new Date() },
  ]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [clientBalance, setClientBalance] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');


const addAccount = (accountDetails) => {
  const { firstName, lastName } = accountDetails;

// Generate a new account number by finding the last account number and incrementing it.
const lastAccountNumber = accountList.length > 0 ? accountList[accountList.length - 1].accountNumber : '100112345679';
const newAccountNumber = (parseInt(lastAccountNumber) + 1);
    
// Check if the new account number already exists in the accountList
while (accountList.some((account) => account.accountNumber === newAccountNumber)) {
  newAccountNumber++; // Increment the account number until it's unique
}

const newAccount = {
accountNumber: newAccountNumber,
firstName: accountDetails.firstName,
lastName: accountDetails.lastName,
clientBalance: parseFloat(accountDetails.clientBalance),
createdAt: new Date(),
};
setAccountList([...accountList, newAccount]);
setFirstName('');
setLastName('');
setClientBalance('');
setUserEmail('');
setUserPassword('');
  };

const handleDeposit = (accountName, amount) => {
  const updatedAccounts = accountList.map((account) => {
    if (account.firstName === accountName) {
       return {
        ...account, clientBalance: account.clientBalance + amount,
        };
      }
      return account;
    });
    setAccountList(updatedAccounts);
  };

    const handleWithdraw = (accountName, amount) => {
      const updatedAccounts = accountList.map((account) => {
        if (account.firstName === accountName) {
          return {
            ...account,
            clientBalance: account.clientBalance - amount,
          };
        }
        return account;
      });
      setAccountList(updatedAccounts);
    };

    const handleTransferMoney = (senderAccount, receiverAccount) => {
      const updatedAccounts = accountList.map((account) => {
        if (account.accountNumber === senderAccount.accountNumber) {
          return {
            ...account,
            clientBalance: senderAccount.clientBalance,
          };
        }
        if (account.accountNumber === receiverAccount.accountNumber) {
          return {
            ...account,
            clientBalance: receiverAccount.clientBalance,
          };
        }
        return account;
    
      });
      setAccountList(updatedAccounts);
      console.log('Transfer initiated:');
    console.log('Sender Account:', senderAccount);
    console.log('Receiver Account:', receiverAccount);

    };
  
  return (
    <Router>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/accounts" element={<AccountsPage accounts={accountList} />} />
        <Route path="/create-account" element={<CreateAccountPage addAccount={addAccount} accounts={accountList} />} />
        <Route path="/transactions" 
          element={
          <TransactionsPage 
            accounts={accountList} 
            onDeposit={handleDeposit} 
            onWithdraw={handleWithdraw} />} />
        <Route path="/deposit" element={<DepositFormPage />} />
        <Route path="/withdraw" element={<WithdrawFormPage />} />
        <Route path="/transfer" element={<TransferPage accounts={accountList} handleTransferMoney={handleTransferMoney} />} />
    </Routes>
    </Router>
  )
};

export function handleDeposit(accountName, amount) {};
export function handleWithdraw(accountName, amount) {};
export default App;