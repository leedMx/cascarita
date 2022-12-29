import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (_props) => {
    const month = _props.date.toLocaleString('en-US', {month: 'long'});
    const day = _props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = _props.date.getFullYear();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{day}</div>
            <div className='expense-date__day'>{year}</div>
        </div>
    )
}

export default ExpenseDate