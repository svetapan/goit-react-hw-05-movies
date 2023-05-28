import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import Layout from './Layout/Layout';

const MoviesPage = lazy(() => import('Pages/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('Pages/MovieDetailsPage'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='movies' element={<Suspense fallback={<div>Loading...</div>}><MoviesPage /></Suspense>} />
         <Route path='movies/:movieId' element={<Suspense fallback={<div>Loading...</div>}><MoviesDetailsPage /></Suspense>} >
           <Route path='cast' element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense>} />
           <Route path='reviws' element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
         </Route >
      </Route>
    </Routes>
  );
};

export default App;