import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (_props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const cancelButtonHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()*100
        }
        _props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButtonHandler}/>}
    </div>
}

export default NewExpense