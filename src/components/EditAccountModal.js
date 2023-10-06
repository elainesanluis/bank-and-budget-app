// EditAccountModal.js
import React, { useState, useEffect } from 'react';
import '../components/EditAccountModal.css';

function EditAccountModal({ isOpen, onClose, account, onSave }) {
  const [editedAccount, setEditedAccount] = useState(account);

  useEffect(() => {
    // Update the editedAccount state when the account prop changes
    setEditedAccount(account);
  }, [account]);

  const handleSave = () => {
    onSave(editedAccount);
    onClose();
  };

  return (
    isOpen && (
      <div className="editmodal">
        <div className="modal-content">
          <h2 className='edit-account-modal'>Edit Account</h2>
          <label className='edit-modal-label'>First Name:</label>
          <input
          id='edit-modal-input'
            type="text"
            value={editedAccount ? editedAccount.firstName : ''}
            onChange={(e) =>
              setEditedAccount({
                ...editedAccount,
                firstName: e.target.value,
              })
            }
          /><br/>
          <label className='edit-modal-label'>Last Name:</label>
          <input
            id="edit-modal-input"
            type="text"
            value={editedAccount ? editedAccount.lastName : ''}
            onChange={(e) =>
              setEditedAccount({
                ...editedAccount,
                lastName: e.target.value,
              })
            }
          /><br/>
          <label className='edit-modal-label'>Email:</label>
          <input
          id='edit-modal-input'
            type="email"
            value={editedAccount ? editedAccount.userEmail : ''}
            onChange={(e) =>
              setEditedAccount({
                ...editedAccount,
                userEmail: e.target.value,
              })
            }
          /><br/>
          <div className='edit-account-btns'>
          <button className='edit-account-save edit-buttons' onClick={handleSave}>Save</button>
          <button className='edit-account-cancel edit-buttons' onClick={onClose}>Cancel</button>
           </div>
        </div>
      </div>
    )
  );
}

export default EditAccountModal;
