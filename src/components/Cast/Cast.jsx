import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../Api';
import css from './Cast.module.css';

const Cast = () => {
  const [castMovie, setCastMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(data => setCastMovie(data))
      .catch(console.log);
  }, [movieId]);

  if (!castMovie) {
    return;
  }

  return (
    <>
      {castMovie.length > 0 ? (
        <ul className={css.list}>
          {castMovie
            .slice(0, 19)
            .map(({ id, name, character, profile_path }) => (
              <li key={id} className={css.list}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    className={css.img}
                  />
                ) : (
                  <div>Image not found</div>
                )}
                <div>
                  <p>
                    <b>{name}</b>
                  </p>
                  <p>
                    Character: <b>{character}</b>
                  </p>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <div>No casts</div>
      )}
    </>
  );
};

export default Cast;








