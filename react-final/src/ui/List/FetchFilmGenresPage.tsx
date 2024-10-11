import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../api/queryClient';

import { fetchFilmsGenres } from '../../api/Movie';
import { List } from './List';

export const FetchFilmGenresPage = () => {
  const queryFilmGenres = useQuery(
    {
      queryKey: ['film', 'genres'],
      queryFn: () => fetchFilmsGenres(),
    },
    queryClient
  );

  switch (queryFilmGenres.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryFilmGenres.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return <List genresList={queryFilmGenres.data} />;
  }
};
