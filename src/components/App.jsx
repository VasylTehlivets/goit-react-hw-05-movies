
import React, { lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>    
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

