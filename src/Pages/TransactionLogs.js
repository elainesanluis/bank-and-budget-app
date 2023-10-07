import React from 'react';
import '../Pages/TransferDetailsModal'

function TransactionLogs({ logs }) {
  return (
    <div className='transactionlogsmodal'>
      <table className='transactionlogstable'>
      <h3>Transaction Logs</h3>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
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
              <td>{log.account}</td>
              <td>{log.amount}</td>
              <td>{log.transactionNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionLogs;
