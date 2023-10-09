import React from 'react';
// import '../Pages/TransactionLogs.css';

function TransactionLogs({ logs, onClose }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
      <table>
      <thead style={{ maxHeight: '300px', overflowY: 'auto'}}>
            <tr>
              <th colSpan="8">
                <h3>Transaction Logs</h3>
              </th>
            </tr>
            <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Sender Account</th>
            <th>Receiver Account</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Transaction Number</th>
            </tr>
          </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.type}</td>
              <td>{log.senderAccount}</td>
              <td>{log.receiverAccount}</td>
              <td>{log.account}</td>
              <td>{log.amount}</td>
              <td>{log.transactionNumber}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <br/>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TransactionLogs;
