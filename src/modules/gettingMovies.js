const gettingMovie = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getMovie = await response.json();
  const listOfMovies = getMovie.slice(35, 45);
  return listOfMovies;
};

export default gettingMovie;