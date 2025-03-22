import { useState } from 'react';

import { useQueryListFavoritesFilms } from '../../hooks/useQueryListFavoritesFilms';
import { List } from './List';
import { FilmSwiper } from '../Swiper/Swiper';

export const ListFavoritesFilmsView = () => {
  const ListFavoritesFilms = useQueryListFavoritesFilms();

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

  switch (ListFavoritesFilms.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => ListFavoritesFilms.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return (
        <>
          {windowSize > 376 ? (
            <List
              moviesList={ListFavoritesFilms.data}
              title={ListFavoritesFilms.data.length !== 0 ? '' : 'Список пуст'}
            />
          ) : (
            <FilmSwiper
              data={ListFavoritesFilms.data}
              title={ListFavoritesFilms.data.length !== 0 ? '' : 'Список пуст'}
            />
          )}
        </>
      );
  }
};
