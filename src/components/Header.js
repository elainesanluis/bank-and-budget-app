import React from "react";
import '../Pages/NewTransactions-Budgetapp.css';

function Header ({ totalTransactions }) {

    return (
            <div className="total-expense-div">
                <p>Total Expense: &#8369;{totalTransactions}</p>
            </div>
    );
};

export default Header;