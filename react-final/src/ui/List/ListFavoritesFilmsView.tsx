import { useQueryListFavoritesFilms } from '../../hooks/useQueryListFavoritesFilms';
import { List } from './List';

export const ListFavoritesFilmsView = () => {
  const ListFavoritesFilms = useQueryListFavoritesFilms();

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
          {ListFavoritesFilms.data.length !== 0 ? (
            <List moviesList={ListFavoritesFilms.data} />
          ) : (
            <List moviesList={ListFavoritesFilms.data} title="Список пуст" />
          )}
        </>
      );
  }
};
