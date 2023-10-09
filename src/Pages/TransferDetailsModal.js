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
        <table>
          <thead>
            <tr>
              <th colSpan="6" className="transfer-details-heading">
                <i className="fa-solid fa-receipt transaction-icon"></i>
          <h3>{type} Details</h3>
          </th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sender Account:</td>
              <td>{senderAccount}</td>
            </tr>
            <tr>
              <td>Receiver Account:</td>
              <td>{receiverAccount}</td>
            </tr>
            <tr>
              <td>Amount:</td>
              <td>{amount}</td>
            </tr>
            <tr>
              <td>Transaction Number:</td>
              <td>{transactionNumber}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>{transactionDate}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>{transactionTime}</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <button onClick={closeTransferDetails}>Close</button>
      </div>
    </div>
  );
}

export default TransferDetailsModal;
