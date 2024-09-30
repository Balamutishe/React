import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { FetchFavoritesListFilms } from '../List/FetchFavoritesFilms';
import { FetchTopListFilms } from '../List/FetchListTopFilms';
import { FetchRandomFilm } from '../Preview/FetchRandomFilm';
import { FooterContent } from '../FooterContent/FooterContent';
import { Modal } from '../Modal/Modal';
import { Menu } from '../Menu/Menu';
import { queryClient } from '../../api/queryClient';
import { fetchUser } from '../../api/User';

import './BaseLayout.css';
import { Account } from '../Account/Account';

export const BaseLayout = () => {
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

  switch (queryUser.status) {
    case 'error':
      return (
        <>
          <header className='container header'>
            <Menu onClick={handleSetVisibility} />
            <div className='header__preview'>
              <FetchRandomFilm />
            </div>
          </header>
          <main className='container main'>
            <FetchTopListFilms />
          </main>
          <footer className='container footer'>
            <FooterContent />
          </footer>
          <Modal visible={visible} handleClick={handleSetVisibility} />
        </>
      );
    case 'success':
      return (
        <>
          <header className='container header'>
            <Menu onClick={handleSetVisibility} />
            <div className='header__preview'>
              <Account />
            </div>
          </header>
          <main className='container main'>
            <FetchFavoritesListFilms />
          </main>
          <footer className='container footer'>
            <FooterContent />
          </footer>
          <Modal visible={visible} handleClick={handleSetVisibility} />
        </>
      );
  }
};
