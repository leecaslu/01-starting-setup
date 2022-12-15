import './ExpensesFilter.css';


export default function ExpensesFilter(props) {
  const changeHandler = (e) => {
    props.yearHandler(parseInt(e.target.value));
  }
  return (
    <div>
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>selecione um ano</label>
          <select onChange={changeHandler}>
            <option value='0'>Tudo</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
      </div>
    </div>
  )
};