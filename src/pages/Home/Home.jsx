import { useMemo, useState, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrending } from '../../Api';

const useTrending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingMovies = useCallback(async () => {
    const movies = await getTrending();
    setTrendingMovies(movies);
  }, []);

  useEffect(() => {
    fetchTrendingMovies();
  }, [fetchTrendingMovies]);

  const renderedMovies = useMemo(
    () =>
      trendingMovies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        </li>
      )),
    [trendingMovies]
  );

  return (
    <>
      <h1>Trending today</h1>
      <ul>{renderedMovies}</ul>
    </>
  );
};

export default useTrending;
