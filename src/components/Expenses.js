import "./Expenses.css";
import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";

function Expenses(_props) {
  const expenses = _props.expenses.map( e => {
    return <ExpenseItem title={e.title} amount={e.amount} date={e.date}/>
  })
  return (
    <div className="expenses">
      {expenses}
    </div>
  );
}

export default Expenses
