import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumericValues() {
  const { setFilterByNumericValues } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  return (
    <div>
      <select
        name="column"
        id="column"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        name="value"
        id="input-value"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
        value="0"
      />

      <button
        onClick={ () => setFilterByNumericValues({ column, comparison, value }) }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumericValues;
