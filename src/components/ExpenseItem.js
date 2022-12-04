import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

// Se você usar expressoes entre chaves, você pode executar codigo de JS.
// Os componentes recebem um parametro chamado 'props', que é um objeto com parametros inputados via html.

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.expense}</h2>
        <div className='expense-item__price'>R${props.value}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;