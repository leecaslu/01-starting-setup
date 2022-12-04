import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './ExpenseContainer.css';

const ExpenseContainer = (props) => {
  return (
    <Card className="expenses">
      {
        props.expenses.map((el) =>
          <ExpenseItem key={el.id} expense={el.title} date={el.date} value={el.amount} />
        )
      }
    </Card>
  )
}

export default ExpenseContainer;