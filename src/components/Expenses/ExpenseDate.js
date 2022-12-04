import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{props.date.getDate()}</div>
      <div className='expense-date__month'>{monthNames[props.date.getMonth()]}</div>
      <div className='expense-date__year'>{props.date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;