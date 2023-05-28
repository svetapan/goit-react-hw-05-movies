import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCastResponse from 'api/getCastResponse';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCastData = async () => {
      const castData = await getCastResponse(movieId);
      setCast(castData);
    };
    fetchCastData();
  }, [movieId]);

  console.log(cast);

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map(castPerson => (
            <li key={castPerson.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${castPerson.profile_path}`}
                alt={castPerson.name}
                width={100}
              />
              <p>{castPerson.name}</p>
              <p>Character: {castPerson.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information for this movie</p>
      )}
    </>
  );
};

export default Cast;
