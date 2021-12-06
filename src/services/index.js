const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function fetchPlanets() {
  return fetch(url)
    .then((response) => response.json())
    .then((planets) => ({
      data: planets.results,
    }));
}
