import React from 'react';
import "./Expenses.css";
import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';

const Expenses = (_props) => {
  const filteringHandler = (filter) => {
    console.log(filter)
  }

  const expenses = _props.expenses.map( e => {
    return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/>
  })
  return (
    <Card className="expenses">
      <ExpensesFilter onFiltering={filteringHandler}/>
      {expenses}
    </Card>
  );
}

export default Expenses
