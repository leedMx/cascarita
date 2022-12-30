import React, { useState } from "react";
import "./Expenses.css";
import "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (_props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = _props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onYearSelection={yearSelectionHandler}
          selectedYear={filteredYear}
        />
        <ExpensesList expensesList={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
