import { List } from './List';
import { useState } from 'react';

import { useQueryTopListFilms } from '../../hooks/useQueryTopListFilms';
import { FilmSwiper } from '../Swiper/Swiper';

export const TopListFilmsView = () => {
  const TopListFilms = useQueryTopListFilms();

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

  switch (TopListFilms.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => TopListFilms.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return (
        <>
          {windowSize > 376 ? (
            <List moviesList={TopListFilms.data} title="Топ 10 фильмов" />
          ) : (
            <FilmSwiper title={'Топ 10 фильмов'} data={TopListFilms.data} />
          )}
        </>
      );
  }
};
