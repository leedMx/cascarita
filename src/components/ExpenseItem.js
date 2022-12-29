import "./ExpenseItem.css";

function ExpenseItem(_props) {
  return (
    <div className="expense-item">
      <div>{_props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{_props.title}</h2>
        <div className="expense-item__price">${_props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
