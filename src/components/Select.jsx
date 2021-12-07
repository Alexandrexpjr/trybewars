import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Select({ filterToRemove, filters, setColumn }) {
  const filteredFilters = filters.filter((f) => !filterToRemove.includes(f));

  useEffect(() => {
    setColumn(filteredFilters[0]);
  }, []);

  return (
    <select
      name="column"
      id="column"
      data-testid="column-filter"
      onChange={ ({ target }) => setColumn(target.value) }
    >
      {
        filteredFilters
          .map((filter) => (
            <option value={ filter } key={ filter }>{ filter }</option>
          ))
      }

    </select>
  );
}

Select.propTypes = {
  filterToRemove: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setColumn: PropTypes.func.isRequired,
};

export default Select;
