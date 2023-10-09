import React from 'react';
import '../Pages/DeleteAccountModal.css';
function DeleteAccountModal({ isOpen, onClose, onDelete, account }) {
  if (!isOpen || !account) {
    return null;
  }

  const handleDelete = () => {
    onDelete(account);
    onClose();
  };

  return (
    <div className={`delete-account-modal ${isOpen ? 'open' : ''}`}>
      <div className="delete-account-modal-content">
        <h2>Confirm Deletion</h2>
        <p>Do you want to delete this account?</p>
        <div className="account-details">
          <p><strong>Account Number:</strong> {account.accountNumber}</p>
          <p><strong>First Name:</strong> {account.firstName}</p>
          <p><strong>Last Name:</strong> {account.lastName}</p>
          <p><strong>Account Balance:</strong> {account.clientBalance}</p>
          <p><strong>Email:</strong> {account.userEmail}</p>
        </div>
        <div className="modal-buttons">
          <button className='delete-account delete-modal-buttons' onClick={handleDelete}>Delete</button>
          <button className='cancel-delete-account delete-modal-buttons' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountModal;
