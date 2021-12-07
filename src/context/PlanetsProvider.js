import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();
  const [filterName, setFilterName] = useState('');
  const [
    filterByNumericValues,
    setFilterByNumericValues,
  ] = useState([{ column: '', comparison: '', value: '' }]);

  useEffect(() => {
    async function fetchData() {
      const results = await fetchPlanets();
      setPlanets(results);
    }
    fetchData();
  }, []);

  const providerValue = {
    ...planets,
    filterByName: { name: filterName },
    setFilterName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ providerValue }>
      { planets ? children : 'Loading...'}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default PlanetsProvider;
