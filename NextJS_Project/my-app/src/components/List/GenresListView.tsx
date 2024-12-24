import { useQueryGenresFilms } from '../../hooks/useQueryGenresFilms';
import { List } from './List';

export const GenresListView = () => {
  const GenresFilms = useQueryGenresFilms();

  switch (GenresFilms.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => GenresFilms.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return <List genresList={GenresFilms.data} title="Жанры фильмов" />;
  }
};
