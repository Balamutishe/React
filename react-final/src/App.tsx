import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { FooterContent } from './ui/FooterContent/FooterContent';
import { Modal } from './ui/Modal/Modal';
import { Menu } from './ui/Menu/Menu';
import { queryClient } from './api/queryClient';
import { fetchUser } from './api/User';
import { MainPage } from './pages/MainPage/MainPage';

import './style.css';

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
          <Menu onClick={handleSetVisibility} />
        </header>
        <main className='main'>
          <Routes>
            <Route path='/' element={<MainPage />} />
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
