import { getQuery } from '../../Api';
import React, { useEffect, useState } from 'react';
import { useLocation, NavLink, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') || '';
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newQuery = form.elements.query.value;
    setSearchParams({ query: newQuery });
    form.reset();
  };

  useEffect(() => {
    async function fetchData() {
      if (!query) return;
      const data = await getQuery(query);
      setMovies(data);
    }
    fetchData();
  }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" defaultValue={query} />
      <button type="submit">Search</button>
      {movies.length ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        query && <div>No results. Please try again.</div>
      )}
    </form>
  );
};

export default Movies;