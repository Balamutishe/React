import { useQuery } from '@tanstack/react-query';
import { fetchListFavoritesFilms } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';
import { List } from './List';

export const FetchFavoritesListFilms = () => {
  const favoritesListFilmsQuerry = useQuery(
    {
      queryFn: () => fetchListFavoritesFilms(),
      queryKey: ['favoritesFilms'],
    },
    queryClient
  );

  switch (favoritesListFilmsQuerry.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => favoritesListFilmsQuerry.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return (
        <>
          {favoritesListFilmsQuerry.data.length !== 0 ? (
            <List moviesList={favoritesListFilmsQuerry.data} />
          ) : (
            <List
              moviesList={favoritesListFilmsQuerry.data}
              title='Список пуст'
            />
          )}
        </>
      );
  }
};
