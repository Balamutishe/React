import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { FooterContent } from './ui/FooterContent/FooterContent';
import { Modal } from './ui/Modal/Modal';
import { Menu } from './ui/Menu/Menu';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { MainPage } from './pages/MainPage/MainPage';
import { queryClient } from './api/queryClient';
import { fetchUser } from './api/User';
import { authStatusContext } from './contexts/authStatusContext';
import { FilmPage } from './pages/FilmPage/FilmPage';
import { GenresPage } from './pages/GenresPage/GenresPage';

import './style.css';
import { ListFilmsGenrePage } from './pages/ListFilmsGenrePage/ListFilmsGenrePage';

function App() {
  const [visible, setVisibility] = useState(false);

  const queryUser = useQuery(
    {
      queryFn: () => fetchUser(),
      queryKey: ['users', 'me'],
      retry: false,
    },
    queryClient
  );

  const handleSetVisibility = () => {
    setVisibility(!visible);
  };

  return (
    <authStatusContext.Provider
      value={{
        status: queryUser.status,
        user: queryUser.data,
      }}
    >
      <BrowserRouter>
        <>
          <Modal visible={visible} handleSetVisibility={handleSetVisibility} />

          <header className='header'>
            <Menu handleSetVisibility={handleSetVisibility} />
          </header>
          <main className='main'>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route
                path='/account'
                element={queryUser.status === 'success' && <AccountPage />}
              />
              <Route path='/movie/:movieId' element={<FilmPage />} />
              <Route path='/genres' element={<GenresPage />} />
              <Route path='/movie' element={<ListFilmsGenrePage />} />
            </Routes>
          </main>
          <footer className='footer'>
            <FooterContent />
          </footer>
        </>
      </BrowserRouter>
    </authStatusContext.Provider>
  );
}

export default App;
