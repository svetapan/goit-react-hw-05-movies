import MovieSearch from 'components/MovieSearch/MovieSearch';

const MoviesPage = ({ handleSubmit, handleChange, searchMovie }) => {
  return (
    <>
      <MovieSearch
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchMovie={searchMovie}
      />
    </>
  );
};

export default MoviesPage;
