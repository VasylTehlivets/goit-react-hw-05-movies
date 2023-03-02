import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_URL = 'trending/movie/day';
const SEARCH_URL = 'search/movie';
const MOVIE_URL = 'movie';
const CREDITS_URL = 'credits';
const REVIEWS_URL = 'reviews';
const API_KEY = '8adcf8d70de8a773f292f2371bb5fb9b';
const LANGUAGE = 'en-US';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
});

export const getTrending = async () => {
  const response = await api.get(TRENDING_URL);
  return response.data.results;
};

export const getQuery = async query => {
  const response = await api.get(SEARCH_URL, { params: { query } });
  return response.data.results;
};

export const getDetails = async movieId => {
  const response = await api.get(`${MOVIE_URL}/${movieId}`);
  return response.data;
};

export const getCast = async movieId => {
  const response = await api.get(`${MOVIE_URL}/${movieId}/${CREDITS_URL}`);
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await api.get(`${MOVIE_URL}/${movieId}/${REVIEWS_URL}`);
  return response.data.results;
};
