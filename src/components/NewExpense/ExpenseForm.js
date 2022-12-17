import { useState } from 'react';
import './ExpenseForm.css';
// MUITO IMPORTANTE: o prevent default do evento impede o recarregamento da pagina.
// Devemos convertere os valores do form, que sao jogados como string!

export default function ExpenseForm(props) {
  // Definindo o state
  const [input, setInput] = useState({});
  const [visible, setVisible] = useState(false);

  // Definindo as funcoes handlers para o componente
  const submitHandler = (e) => {
    e.preventDefault();
    input.amount = parseFloat(input.amount);
    input.date = new Date(input.date);
    props.inputHandler(input); // enviado as infos para o componente pai
    setInput({}); // resetando o form
  }

  const clickHandler = (e) =>{
    e.preventDefault();
    setVisible(visible => !visible);
    setInput({});
  }

  const titleChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  };

  // Criando o componente
  return ( !visible
    ? <div className='new-expense__control'>
    <button type='button' onClick={clickHandler}>Add new Expense</button>
    </div>
    :
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title' value={input.title || ""} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            name='amount'
            value={input.amount || ""}
            min='0.01'
            step='0.01'
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            name='date'
            value={input.date || ""}
            min='2019-01-01'
            max='2022-12-31'
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={clickHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}