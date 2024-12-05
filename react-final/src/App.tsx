import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { FooterContent } from './ui/FooterContent/FooterContent';
import { Menu } from './ui/Menu/Menu';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { MainPage } from './pages/MainPage/MainPage';
import { modalContext } from './contexts/modalContext';
import { FilmPage } from './pages/FilmPage/FilmPage';
import { GenresPage } from './pages/GenresPage/GenresPage';
import { ListFilmsPage } from './pages/ListFilmsPage/ListFilmsPage';

import './style.css';

function App() {
  const [visible, setVisibility] = useState(false);
  const [modalVariant, setModalVariant] = useState('');

  const handleSetVisibility = () => {
    setVisibility((visible) => (visible ? false : true));
  };

  const handleSwitchModal = (event: React.BaseSyntheticEvent) => {
    if (event.target.innerText === 'Трейлер') {
      setModalVariant('trailer');
    } else {
      setModalVariant('form');
    }
  };

  return (
    <modalContext.Provider
      value={{
        visible: visible,
        modalVariant: modalVariant,
        handleSetVisibility: handleSetVisibility,
        handleSwitchModal: handleSwitchModal,
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
    </modalContext.Provider>
  );
}

export default App;
