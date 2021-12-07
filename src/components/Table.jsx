import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filterByName, filterByNumericValues, order } = useContext(PlanetsContext);
  const { column, sort } = order;
  const { name } = filterByName;
  const firstPlanet = Object.keys(data[0]);
  const hexadecimal = 16;

  const filterNumeric = (key, operator, number) => {
    const basis = 10;
    switch (operator) {
    case 'maior que':
      return parseInt(key, basis) > parseInt(number, basis);
    case 'menor que':
      return parseInt(key, basis) < parseInt(number, basis);
    case 'igual a':
      return parseInt(key, basis) === parseInt(number, basis);
    default:
      return true;
    }
  };

  const sortColumns = (key, sortType, array) => {
    switch (sortType) {
    case 'ASC':
      return array.sort((a, b) => a[key] - b[key]);
    case 'DESC':
      return array.sort((a, b) => b[key] - a[key]);
    default:
      return array;
    }
  };

  const filterPlanet = (planet) => {
    const filtersArray = [];
    filterByNumericValues.forEach(({ header, comparison, value }) => {
      const currentFilter = filterNumeric(planet[header], comparison, value);
      filtersArray.push(currentFilter);
    });
    return filtersArray.every((f) => f);
  };

  return (
    <table>
      <thead>
        <tr>
          {
            firstPlanet
              .filter((planetFeature) => planetFeature !== 'residents')
              .map((feature) => (
                <th key={ feature }>{ feature }</th>
              ))
          }
        </tr>
      </thead>
      <tbody>
        {
          sortColumns(column, sort, data)
            .filter((unfilteredPlanet) => unfilteredPlanet.name.includes(name)
              && filterPlanet(unfilteredPlanet))
            .map((planet) => {
              delete planet.residents;
              const planetInfos = Object.values(planet);
              return (
                <tr key={ Math.random() }>
                  {
                    planetInfos.map((planetInfo, index) => (
                      <td
                        key={ (Math.random()).toString(hexadecimal) }
                        data-testid={ index === 0 ? 'planet-name' : '' }
                      >
                        { planetInfo }
                      </td>
                    ))
                  }
                </tr>
              );
            })
        }
      </tbody>
    </table>
  );
}

export default Table;
