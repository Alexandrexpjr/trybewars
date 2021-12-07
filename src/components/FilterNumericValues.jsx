import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Select from './Select';

export const filters = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

function FilterByNumericValues() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [columns, setColumns] = useState([]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const hexadecimal = 16;

  const renderNumericFilter = (filterToRemove = ['']) => (
    <div>
      <Select
        filterToRemove={ filterToRemove }
        filters={ filters }
        setColumn={ setColumn }
      />

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
        defaultValue="0"
      />
    </div>
  );

  return (
    <div>
      {
        renderNumericFilter(columns)
      }

      <button
        onClick={ () => {
          setFilterByNumericValues([...filterByNumericValues,
            { column, comparison, value }]);
          setColumns([...columns, column]);
        } }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>

      {
        filterByNumericValues
          .map(({ column: current, comparison: operator, value: number }) => (
            current
              && (
                <div data-testid="filter" key={ Math.random().toString(hexadecimal) }>
                  <span>
                    {current}
                    {' '}
                    { operator }
                    {' '}
                    { number }
                  </span>
                  <button
                    type="button"
                    onClick={ () => {
                      setColumns(columns.filter((c) => c !== current));
                      setFilterByNumericValues(filterByNumericValues
                        .filter((element) => element.column !== current));
                    } }
                  >
                    X
                  </button>
                </div>)
          ))
      }

    </div>
  );
}

export default FilterByNumericValues;
