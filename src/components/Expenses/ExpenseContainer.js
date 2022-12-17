import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import './ExpenseContainer.css';

const ExpenseContainer = (props) => {
  // função que organiza os gastos da lista por ano
  

  return (
    <Card className="expenses">
      <ExpensesFilter yearHandler={props.yearHandler} />
      <ExpensesList listaExpenses={props.expenses} />
    </Card>
  )
}

export default ExpenseContainer;