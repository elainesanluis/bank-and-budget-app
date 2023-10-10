import Modal from 'react-modal';
import React, { useState } from 'react';

export default function TransactionHistory({ transactions, setTransactions }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editTransactionData, setEditTransactionData] = useState({});
  const [deleteTransactionId, setDeleteTransactionId] = useState(null);
  const [modalMode, setModalMode] = useState('edit');


  const openEditModal = (transaction) => {
    setEditTransactionData(transaction);
    setModalMode('edit');
    setModalIsOpen(true);
  };


  const closeEditModal = () => {
    setModalIsOpen(false);
  };


  const saveEditedTransaction = (editedTransaction) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === editedTransaction.id ? editedTransaction : transaction
    );
    setTransactions(updatedTransactions);
    setModalIsOpen(false);
  };

 
  const openDeleteModal = (transactionId) => {
    
  const isEditing = !!transactions.find((transaction) => transaction.id === transactionId);
  
  if (isEditing) {

    closeEditModal();
  }


    setModalMode('delete');
    setDeleteTransactionId(transactionId);
    setModalIsOpen(true);
  };


  const confirmDeleteTransaction = () => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== deleteTransactionId
    );
    setTransactions(updatedTransactions);
    setModalIsOpen(false);
    setDeleteTransactionId(null);
  };


  return (
        <>
          <div className='tranx-history'>
            <h3>Transaction History</h3>
            <table>
              <thead>
                <tr>
                  <th className='transaction-history-header'>Date</th>
                  <th className='transaction-history-header'>Category</th>
                  <th className='transaction-history-header'>Text</th>
                  <th className='transaction-history-header'>Amount</th>
                  <th className='transaction-history-header'>Owner</th>
                  <th className='transaction-history-header'>Actions</th>
                </tr>
              </thead>
              <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.selectCategory}</td>
                  <td>{transaction.text}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.owner}</td>
                  <td>
                    <button className='transaction-history-buttons' onClick={() => openEditModal(transaction)}><i className="fa-solid fa-pencil accounts-icon"></i></button>
                    <button className='transaction-history-buttons' onClick={() => openDeleteModal(transaction.id)}><i className="fa-solid fa-trash-can accounts-icon"></i></button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeEditModal}
              ariaHideApp={false}
            >
            {modalMode === 'edit' && editTransactionData.id ? (
              <div className='edit-transactions-wrapper'>
              <div className='edit-transactions-container'>
                <h2>Edit Transaction</h2>
                <form>
                  <label htmlFor="owner" className='edit-transactions-label'>Owner/Payee: </label>
                    <input
                    type="text"
                    id="owner"
                    className='edit-transactions-input'
                    value={editTransactionData.owner}
                    onChange={(e) =>
                    setEditTransactionData({
                    ...editTransactionData,
                    owner: e.target.value,
                    })
                    }
                    /><br></br>
                  <label htmlFor="selectCategory" className='edit-transactions-label'>Category: </label>
                    <select
                    className='edit-transactions-input'
                      id="selectCategory"
                      value={editTransactionData.selectCategory}
                      onChange={(e) => setEditTransactionData({...editTransactionData, selectCategory: e.target.value,})
                      }>
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
                      <br></br>
                      <label htmlFor="text" className='edit-transactions-label'>Name of Expense: </label>
                      <input
                      className='edit-transactions-input'
                        type="text"
                        id="name-of-tranx"
                        value={editTransactionData.text}
                        onChange={(e) =>
                          setEditTransactionData({
                            ...editTransactionData,
                            text: e.target.value,
                          })
                        }
                      /><br></br>
                      <label htmlFor="amount" className='edit-transactions-label'>Amount: </label>
                      <input
                      className='edit-transactions-input'
                        type="number"
                        id="amount"
                        value={editTransactionData.amount}
                        onChange={(e) =>
                          setEditTransactionData({
                            ...editTransactionData,
                            amount: e.target.value,
                          })
                        }
                      /><br></br>
                      <label htmlFor="date" className='edit-transactions-label'>Date: </label>
                      <input
                      className='edit-transactions-input'
                        type="date"
                        id="date"
                        value={editTransactionData.date}
                        onChange={(e) =>
                          setEditTransactionData({
                            ...editTransactionData,
                            date: e.target.value,
                          })
                        }
                      /><br></br>
                      <div>
                        <br/>
                        <div className='edit-transactions-cancel-save'>
                      <button className='edit-transactions-cancel' onClick={closeEditModal}>Cancel</button>
                      <button className='edit-transactions-save' onClick={() => saveEditedTransaction(editTransactionData)}>Save</button>
                      </div>
                      </div>
                    </form>
                    </div>
                  </div>
                ) : (
              <div className='transactions-history-delete-container'>
              <div className='transactions-history-delete-div'>
                    <h2>Confirm Delete</h2>
                    <p>Are you sure you want to delete this transaction?</p>
                    <div className='transactions-history-delete-buttons'>
                    <button className='transactions-history-delete-cancel' onClick={closeEditModal}>Cancel</button>
                   <button className='transactions-history-delete-delete' onClick={confirmDeleteTransaction}>Delete</button>
                   </div>
                   </div>
                  </div>
                )}
                </Modal>
            </>
  );
};