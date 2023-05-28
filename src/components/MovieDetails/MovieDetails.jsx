import getMovieDetails from 'api/getMovieDetails';
import { useEffect, useState } from 'react';
import css from './MovieDetails.module.css'
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };
    fetchData();
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state) {
      navigate(location.state);
    } else {
      navigate(-1);
    }
  };

  return (
    <div>
      <button className={css.btn} onClick={handleGoBack}>Go back</button>
      {movie ? (
        <>
          <div className={css.thumb}>
              {movie.backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  width={600}
                />
              )}
            <div className={css.information}>
              <h1>{movie.title}</h1>
              <strong>Overview</strong>
              <p>{movie.overview}</p>
              {movie.genres && (
                <>
                  <strong>Genres</strong>
                  <ul>
                    {movie.genres.map(({ id, name }) => (
                      <li key={id}>{name}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className={css.addInformation}>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/reviws`}>Reviews</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviesDetails;
