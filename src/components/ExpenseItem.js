import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(_props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={_props.date} />
      <div className="expense-item__description">
        <h2>{_props.title}</h2>
        <div className="expense-item__price">${_props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
