import React, { useContext, useState } from "react";
import PlanetsContext from "../context/PlanetsContext";

function FilterByNumericValues() {
  const { setFilterByNumericValues } = useContext(PlanetsContext);
  const [ column, setColumn ] = useState('population');
  const [ comparison, setComparison ] = useState('maior que');
  const [ value, setValue ] = useState('100000');

  const handleChange = ({ target }, callback) => {
    const { value } = target;
    callback(value);
  }
  return (
    <div>
      <select name="column" id="column" data-testid="column-filter" onChange={ ({ target }) => setColumn(target.value) } >
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>

      <select name="comparison" id="comparison" data-testid="comparison-filter" onChange={ ({ target }) => setComparison(target.value)} >
        <option value="maior que">Maior que</option>
        <option value="menor que">Menor que</option>
        <option value="igual a">Igual a</option>
      </select>

      <input type="number" name="value" id="input-value" data-testid="value-filter" onChange={ ({ target }) => setValue(target.value)} />

      <button onClick={() => setFilterByNumericValues({ column, comparison, value })}>Filtrar</button>
    </div>
  );
}

export default FilterByNumericValues;