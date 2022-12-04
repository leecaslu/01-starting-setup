import ExpenseItem from "./ExpenseItem";
import './ExpenseContainer.css';

function ExpenseContainer(props) {

  return (
    <div className="expenses">
      {
        props.expenses.map((el) =>
          <ExpenseItem expense={el.title} date={el.date} value={el.amount} />
        )
      }
    </div>
  )
}

export default ExpenseContainer;