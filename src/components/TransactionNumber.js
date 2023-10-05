let transactionCounts = {
    Deposit: 1,
    Withdrawal: 1,
    Transfer: 1,
  };
  
  export function generateTransactionNumber(type) {
    const paddedCount = String(transactionCounts[type]).padStart(4, '0');
    transactionCounts[type]++;
    
    switch (type) {
      case 'Deposit':
        return `D${paddedCount}`;
      case 'Withdrawal':
        return `W${paddedCount}`;
      case 'Transfer':
        return `T${paddedCount}`;
      default:
        return '';
    }
  }
  