import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import './ExpenseContainer.css';
import { useState } from "react";

const ExpenseContainer = (props) => {
  // função que organiza os gastos da lista por ano
  const [year, setYear] = useState(0);
  const yearHandler = (ano) => setYear(ano);
  const listaExpenses = props.expenses.filter((el) => !year ? !year : el.date.getFullYear() === year);
  return (
    <Card className="expenses">
      <ExpensesFilter yearHandler={yearHandler} />
      {listaExpenses.map((el) =>
        <ExpenseItem key={el.id} expense={el.title} date={el.date} value={el.amount} />)}
    </Card>
  )
}

export default ExpenseContainer;