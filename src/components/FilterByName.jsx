import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { setFilterName } = useContext(PlanetsContext);

  return (
    <input
      type="text"
      name="name"
      id="filter-name"
      onChange={ ({ target }) => setFilterName(target.value) }
      data-testid="name-filter"
      placeholder='Search by name'
    />
  );
}

export default FilterByName;
