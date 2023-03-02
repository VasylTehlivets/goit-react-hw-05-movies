import { NavLink } from 'react-router-dom';

 import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
