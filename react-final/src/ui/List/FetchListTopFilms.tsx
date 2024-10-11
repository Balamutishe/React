import { useQuery } from '@tanstack/react-query';
import { fetchListTopFilms } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';
import { List } from './List';

export const FetchTopListFilms = () => {
  const TopListFilmsQuerry = useQuery(
    {
      queryFn: () => fetchListTopFilms(),
      queryKey: ['topFilms'],
    },
    queryClient
  );

  switch (TopListFilmsQuerry.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => TopListFilmsQuerry.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return (
        <List moviesList={TopListFilmsQuerry.data} title='Топ 10 фильмов' />
      );
  }
};
