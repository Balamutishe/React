import { FC } from 'react';
import { UseQueryResult } from '@tanstack/react-query';

import { PreviewFilm } from './PreviewFilm';
import { TMovie } from '../../api/Movie';

interface RandomFilmView {
  queryRandomFilm: UseQueryResult<TMovie, Error>;
}

export const RandomFilmView: FC<RandomFilmView> = ({ queryRandomFilm }) => {
  switch (queryRandomFilm.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryRandomFilm.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return (
        <PreviewFilm
          data={queryRandomFilm.data}
          refetch={queryRandomFilm.refetch}
          variant="random"
        />
      );
  }
};
