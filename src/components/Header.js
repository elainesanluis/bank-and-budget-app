import React from "react";

function Header ({ totalTransactions }) {

    return (
        <header>
            <div className="total-expense-div">
                <h1>Total Expense</h1>
                <div className="total-expense">&#8369;{totalTransactions}</div>
            </div>
        </header>
    );
};

export default Header;