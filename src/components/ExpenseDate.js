function ExpenseDate(props) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div>
      <div>{props.date.getDate()}</div>
      <div>{monthNames[props.date.getMonth()]}</div>
      <div>{props.date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;