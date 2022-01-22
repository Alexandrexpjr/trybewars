import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { filters } from './FilterNumericValues';

function Order() {
  const { setOrder } = useContext(PlanetsContext);
  const [sort, setSort] = useState('ASC');
  const [column, setColumn] = useState('population');

  const handleRadioChange = ({ target }) => {
    if (target.checked) {
      return setSort(target.value);
    }
  };

  const handleSelectChange = ({ target }) => setColumn(target.value);

  return (
    <div>
      <select id="orderSelect" data-testid="column-sort" onChange={ handleSelectChange }>
        {
          filters.map((filter) => (
            <option key={ Math.random() } value={ filter }>{ filter }</option>
          ))
        }
      </select>
      <span>Crescent</span>
      <input
        type="radio"
        className='radio-btn'
        name="order"
        value="ASC"
        data-testid="column-sort-input-asc"
        onChange={ handleRadioChange }
      />

      <span>Decrescent</span>
      <input
        type="radio"
        className='radio-btn'
        name="order"
        value="DESC"
        data-testid="column-sort-input-desc"
        onChange={ handleRadioChange }
      />

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setOrder({ column, sort }) }
      >
        Sort
      </button>
    </div>
  );
}

export default Order;
