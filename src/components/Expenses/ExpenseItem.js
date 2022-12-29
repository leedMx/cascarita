import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (_props) => {
  const [title, setTitle] = useState(_props.title);

  const clickHandler = (_props) => {
    setTitle("Updated!");
    console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={_props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${_props.amount}</div>
      </div>
      <button onClick={clickHandler}>Button</button>
    </Card>
  );
};

export default ExpenseItem;
