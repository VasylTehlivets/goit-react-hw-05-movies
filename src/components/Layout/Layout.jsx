import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
