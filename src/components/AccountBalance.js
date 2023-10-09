import React, { useState } from 'react';

export default function AccountBalance ({balance, setBalance}) {

const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToBalance = () => {
    setBalance(balance + amountToAdd);
    closeModal();
  };

  const ModalComponent = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
}

return (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={onClose}>
        &times;
      </span>
      <p>Enter an amount:</p>
      <input
        type='number'
        value={amountToAdd}
        onChange={(e) => setAmountToAdd(parseFloat(e.target.value))}
      />
      <button onClick={addToBalance}>Add to Balance</button>
    </div>
  </div>
);
};
    return (
        <>
        <div className='accountBalance'>
            <p>Budget Balance: &#8369;{balance.toFixed(2)}</p>
            <button className='addBudget' onClick={openModal}>Add budget</button>
        </div>
        <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
  };
