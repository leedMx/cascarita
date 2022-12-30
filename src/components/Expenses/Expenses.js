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

  const expenses = _props.expenses.map((e) => {
    return (
      <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelection={yearSelectionHandler}
        selectedYear={filteredYear}
      />
      {expenses}
    </Card>
  );
};

export default Expenses;
