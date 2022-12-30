import React, { useState } from "react";
import "./Expenses.css";
import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (_props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesFilter = (
    <ExpensesFilter
      onYearSelection={yearSelectionHandler}
      selectedYear={filteredYear}
    />
  );

  let expenseItemList = <p>No expenses found</p>;

  const filteredExpenses = _props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  if (filteredExpenses.length > 0) {
    expenseItemList = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      {expensesFilter}
      {expenseItemList}
    </Card>
  );
};

export default Expenses;
