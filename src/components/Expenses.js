import "./Expenses.css";
import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(_props) {
  const expenses = _props.expenses.map( e => {
    return <ExpenseItem title={e.title} amount={e.amount} date={e.date}/>
  })
  return (
    <Card className="expenses">
      {expenses}
    </Card>
  );
}

export default Expenses
