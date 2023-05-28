import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import getSearchMovie from 'api/getSearchMovie';
import css from './MovieSearch.module.css'

const MovieSearch = () => {
  const [results, setResults] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    if (query) {
      setSearchMovie(query);
      searchMovies(query);
    }
  }, [location]);

  const searchMovies = async query => {
    try {
      const data = await getSearchMovie(query);
      setResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchMovie.trim() === '') {
      alert('Please enter the name of the film');
      return;
    }

    setSearchMovie('');
    searchMovies(searchMovie);

    const queryParams = new URLSearchParams();
    queryParams.set('query', searchMovie);
    navigate(`?${queryParams.toString()}`);
  };

  const handleChange = evt => {
    const value = evt.currentTarget.value.toLowerCase();
    setSearchMovie(value);
  };

  return (
    <>
      <form className={css.formWrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchMovie}
          onChange={handleChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ul>
        {results.length > 0 &&
          results.map(result => (
            <li key={result.id}>
              <Link to={`/movies/${result.id}`} state={location}>
                {result.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieSearch;
