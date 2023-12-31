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
};


return (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={onClose}>
        &times;
      </span>
      <p className='modal-content-enter-amount'>Enter an amount:</p>
      <input
      className='modal-content-input'
        type='number'
        value={amountToAdd}
        onChange={(e) => setAmountToAdd(parseFloat(e.target.value))}
      />
      <br/>
      <button className='modal-content-button' onClick={addToBalance}>Add to Balance</button>
    </div>
  </div>
);
};
    return (
        <>
        <div className='accountBalance'>
            <p className='accountBalance-ui'>Budget Balance: <span className='accountBalance-ui-peso'> &#8369;{balance.toFixed(2)}</span></p>
            <button className='addBudget' onClick={openModal}>Add budget</button>
            <br/>
        </div>
        <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
  };
