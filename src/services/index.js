const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function fetchPlanets() {
  return fetch(url)
    .then((response) => response.json())
    .then((planets) => ({
      data: planets.results.map((planet) => {
        const { 
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          films,
          } = planet;

        const newMovies = films.map(film => get_movie(film))
        return { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, movies: newMovies}
      }),
    }))
}

function get_movie(url) {
  const movie = url.split('/');
  const movieNumber = movie[movie.length - 2]
  return MOVIE_ENUM[movieNumber]
}

const MOVIE_ENUM = {
  1: 'Episode I - The Phantom Menace',
  2: 'Episode II - Attack of the Clones',
  3: 'Episode III - Revenge of the Sith',
  4: 'Episode IV - A New Hope',
  5: 'Episode V - The Empire Strikes Back',
  6: 'Episode VI - Return of the Jedi',
}