import React from 'react';
import "./Expenses.css";
import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"

const Expenses = (_props) => {
  const expenses = _props.expenses.map( e => {
    return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/>
  })
  return (
    <Card className="expenses">
      {expenses}
    </Card>
  );
}

export default Expenses
