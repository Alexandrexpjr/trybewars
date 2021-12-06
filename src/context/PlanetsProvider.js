import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();
  useEffect(() => {
    async function fetchData() {
      const results = await fetchPlanets();
      setPlanets(results);
    }
    fetchData();
  }, []);
  return (
    <PlanetsContext.Provider value={ planets }>
      { planets ? children : 'Loading...'}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
