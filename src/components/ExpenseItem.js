import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (_props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={_props.date} />
      <div className="expense-item__description">
        <h2>{_props.title}</h2>
        <div className="expense-item__price">${_props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
