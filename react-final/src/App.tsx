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

import './style.css';
import { FilmPage } from './pages/FilmPage/FilmPage';

function App() {
  const [visible, setVisibility] = useState(false);

  const handleSetVisibility = () => {
    setVisibility(!visible);
  };

  const queryUser = useQuery(
    {
      queryFn: () => fetchUser(),
      queryKey: ['users', 'me'],
      retry: false,
    },
    queryClient
  );

  return (
    <BrowserRouter>
      <>
        <Modal visible={visible} handleClick={handleSetVisibility} />

        <header className='header'>
          <Menu
            onClick={handleSetVisibility}
            userName={queryUser.data?.name}
            authStatus={queryUser.status}
          />
        </header>
        <main className='main'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route
              path='/account'
              element={
                queryUser.status === 'success' && (
                  <AccountPage user={queryUser.data} />
                )
              }
            />
            <Route path='/movie/:movieId' element={<FilmPage />} />
          </Routes>
        </main>
        <footer className='footer'>
          <FooterContent />
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
