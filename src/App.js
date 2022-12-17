import ExpenseContainer from "./components/Expenses/ExpenseContainer";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react';


const App = () => {
  // state expenses
  const [expenses, setExpenses] = useState([]);
  // state filterYear
  const [year, setYear] = useState(0);

  const yearHandler = (ano) => setYear(ano);

  // handler do input de expenses
  const inputHandler = (input) => {
    if (input.title && input.date && input.amount) {
      input.id = (expenses).length;
      setExpenses(state => [...state, input]);
    }
  }

  // Setting the datapoints

  // colocando os componentes na arvore e passando dados de um comp para outro
  return (
    <div>
      <NewExpense inputHandler={inputHandler} />
      <ExpenseContainer expenses={expenses} year={year} yearHandler={yearHandler}/>
    </div>
  );
}

export default App;
