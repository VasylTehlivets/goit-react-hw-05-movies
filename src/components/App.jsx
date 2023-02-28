import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Movies } from "./Movies/Movies";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} >
          <Route path=":movieId" element={<MovieDetails />} >
            <Route path=":cast" element={<MovieDetails />} />
            <Route path=":reviews" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
