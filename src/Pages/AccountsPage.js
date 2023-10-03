// AccountsPage.js
import React from 'react';
import './AccountsPage.css';
import { Link } from 'react-router-dom';
import '../components/layout.css';
import EditAccountModal from '../components/EditAccountModal';
import { useState } from 'react';
import '../components/EditAccountModal.css';

function AccountsPage({ accounts, updateAccountList }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedAccount, setEditedAccount] = useState(null);

  const openEditModal = (account) => {
    setEditedAccount(account);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditedAccount(null);
  };

  const handleSaveEditedAccount = (editedAccountData) => {
    // Convert the edited data to uppercase before updating the account list
  const editedAccountDataUpperCase = {
    ...editedAccountData,
    firstName: editedAccountData.firstName.toUpperCase(),
    lastName: editedAccountData.lastName.toUpperCase(),
    userEmail: editedAccountData.userEmail.toUpperCase(),
  };

    // Find the index of the edited account in the account list
    const editedAccountIndex = accounts.findIndex(
      (account) => account.accountNumber === editedAccountData.accountNumber
    );

    if (editedAccountIndex !== -1) {
      // Update the account in the account list
      const updatedAccounts = [...accounts];
      updatedAccounts[editedAccountIndex] = editedAccountDataUpperCase;
      // Update the account list state with the edited data
      updateAccountList(updatedAccounts);
    }
  };

  return (
    <div>
      <div id='create-account-logo'>
        <Link to="/">
          <img className='bankLogo' src='https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png' alt='Bank Logo' />
        </Link>
        <h1>Bank of Avion School of the Philippines</h1>
      </div>
      <br />
      <br />
      <br />
      <div className='accounts-heading'>
      <h2>Accounts</h2>
      <Link to="/create-account" className='accountspage-add-user'><i class="fa-solid fa-user-plus"></i></Link>
      </div>
      <div className='account-container'>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Account Balance</th>
            <th>Account Number</th>
            <th>Date Created</th>
            <th>Email</th>
            <th>Edit Account</th> 
          </tr>
        </thead>
        <tbody>
        {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.firstName}</td>
              <td>{account.lastName}</td>
              <td>{account.clientBalance}</td>
              <td>{account.accountNumber}</td>
              <td>{account.createdAt.toLocaleDateString()}</td>
              <td>{account.userEmail}</td>
              <td><button className="edit-button" onClick={() => openEditModal(account)}><i className="fa-solid fa-pencil"></i></button></td>
            </tr>
          ))}

        </tbody>
      </table>
      </div>
      <EditAccountModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        account={editedAccount}
        onSave={handleSaveEditedAccount}
      />
    </div>
  );
}

export default AccountsPage;
