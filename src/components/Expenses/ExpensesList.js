import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props){
  return (
    !props.listaExpenses.length 
    ? <h2 className="expenses-list__fallback">Placeholder</h2>
    : <ul className="expenses-list">{props.listaExpenses.map((el) => <ExpenseItem key={el.id} expense={el.title} date={el.date} value={el.amount} />)} </ul>
  )
}