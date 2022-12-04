import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

// Se você usar expressoes entre chaves, você pode executar codigo de JS.
// Os componentes recebem um parametro chamado 'props', que é um objeto com parametros inputados via html.

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.expense}</h2>
        <div className='expense-item__price'>R${props.value}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;