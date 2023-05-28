import MoviesDetails from 'components/MovieDetails/MovieDetails';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MoviesDetailsPage = () => {
  return (
    <>
      <MoviesDetails />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
