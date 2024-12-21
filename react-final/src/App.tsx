import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { FooterContent } from './ui/FooterContent/FooterContent';
import { Menu } from './ui/Menu/Menu';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { MainPage } from './pages/MainPage/MainPage';
import { FilmPage } from './pages/FilmPage/FilmPage';
import { GenresPage } from './pages/GenresPage/GenresPage';
import { ListFilmsPage } from './pages/ListFilmsPage/ListFilmsPage';
import store from './store';

import './style.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <header className="header">
            <Menu />
          </header>
          <main className="main">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/genres" element={<GenresPage />} />
              <Route path="/movie/:movieId" element={<FilmPage />} />
              <Route path="/movie" element={<ListFilmsPage />} />
            </Routes>
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
