import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filterByName, filterByNumericValues } = useContext(PlanetsContext);
  const { name } = filterByName;
  const { column, comparison, value } = filterByNumericValues[0];
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
          data
            .filter((unfilteredPlanet) => unfilteredPlanet.name.includes(name)
              && filterNumeric(unfilteredPlanet[column], comparison, value))
            .map((planet) => {
              delete planet.residents;
              const planetInfos = Object.values(planet);
              return (
                <tr key={ Math.random() }>
                  {
                    planetInfos.map((planetInfo) => (
                      <td key={ (Math.random()).toString(hexadecimal) }>
                        {' '}
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
