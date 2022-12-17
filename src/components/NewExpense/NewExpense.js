import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

export default function NewExpense(props) {
  return (
    <Card className='new-expense'>
      <ExpenseForm inputHandler={props.inputHandler} />
    </Card>
  )
}