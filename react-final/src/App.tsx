import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { FooterContent } from './ui/FooterContent/FooterContent';
import { Menu } from './ui/Menu/Menu';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { MainPage } from './pages/MainPage/MainPage';
import { authStatusContext } from './contexts/authStatusContext';
import { FilmPage } from './pages/FilmPage/FilmPage';
import { GenresPage } from './pages/GenresPage/GenresPage';
import { ListFilmsPage } from './pages/ListFilmsPage/ListFilmsPage';
import { useQueryUser } from './hooks/useQueryUser';

import './style.css';

function App() {
  const [visible, setVisibility] = useState(false);
  const [modalVariant, setModalVariant] = useState('form');

  const handleSetVisibility = (event: React.BaseSyntheticEvent) => {
    setVisibility((visible) => (visible ? false : true));

    if (event.target.innerText === 'Трейлер') {
      setModalVariant('trailer');
    }

    if (event.target.innerText === 'Войти') {
      setModalVariant('form');
    }
  };

  const user = useQueryUser();

  return (
    <authStatusContext.Provider
      value={{
        status: user.status,
        user: user.data,
        visible: visible,
        modalVariant: modalVariant,
        handleSetVisibility: handleSetVisibility,
      }}
    >
      <BrowserRouter>
        <>
          <header className="header">
            <Menu />
          </header>
          <main className="main">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/movie/:movieId" element={<FilmPage />} />
              <Route path="/genres" element={<GenresPage />} />
              <Route path="/movie" element={<ListFilmsPage />} />
            </Routes>
          </main>
          <footer className="footer">
            <FooterContent />
          </footer>
        </>
      </BrowserRouter>
    </authStatusContext.Provider>
  );
}

export default App;
