import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { lazy, Suspense } from 'react';

import { FooterContent } from './ui/FooterContent/FooterContent';
import { Menu } from './ui/Menu/Menu';
// import { AccountPage } from './pages/AccountPage/AccountPage';
// import { MainPage } from './pages/MainPage/MainPage';
// import { FilmPage } from './pages/FilmPage/FilmPage';
// import { GenresPage } from './pages/GenresPage/GenresPage';
// import { ListFilmsPage } from './pages/ListFilmsPage/ListFilmsPage';
import store from './store';

import './style.css';

const LazyMainPage = lazy(() => import('./pages/MainPage/MainPage'));
const LazyAccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const LazyGenresPage = lazy(() => import('./pages/GenresPage/GenresPage'));
const LazyFilmPage = lazy(() => import('./pages/FilmPage/FilmPage'));
const LazyListFilmsPage = lazy(
  () => import('./pages/ListFilmsPage/ListFilmsPage')
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <header className="header">
            <Menu />
          </header>
          <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<LazyMainPage />} />
                <Route path="/account" element={<LazyAccountPage />} />
                <Route path="/genres" element={<LazyGenresPage />} />
                <Route path="/movie/:movieId" element={<LazyFilmPage />} />
                <Route path="/movie" element={<LazyListFilmsPage />} />
              </Routes>
            </Suspense>
          </main>
          <footer className="footer">
            <FooterContent />
          </footer>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
