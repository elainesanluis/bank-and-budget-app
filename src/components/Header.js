import React from "react";
import '../Pages/NewTransactions-Budgetapp.css';

function Header ({ totalTransactions }) {

    return (
            <div className="total-expense-div">
                <p className="total-expense-div-ui">Total Expense: <span className="total-expense-div-peso">&#8369;{totalTransactions.toFixed(2)}</span> </p>
            </div>
    );
};

export default Header;