import React from 'react';

function TransferDetailsModal({ type, senderAccount, receiverAccount, amount, transactionNumber, transactionDate, transactionTime, isVisible, onClose }) {
  const modalStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    zIndex: isVisible ? '999' : '-1',
  };

  const closeTransferDetails = () => {
    document.body.classList.remove('transfer-details-open');
    document.documentElement.classList.remove('transfer-details-open');
    onClose();
  };

  return (
    <div className="transfer-details-container" style={modalStyle}>
      <div className="transfer-details-modal">
        <h3>{type} Details</h3>
        <p>Sender Account: {senderAccount}</p>
        <p>Receiver Account: {receiverAccount}</p>
        <p>Amount: {amount}</p>
        <p>Transaction Number: {transactionNumber}</p>
        <p>Date: {transactionDate}</p>
        <p>Time: {transactionTime}</p>
        <button onClick={closeTransferDetails}>Close</button>
      </div>
    </div>
  );
}

export default TransferDetailsModal;
