import { List } from './List';
import { useQueryTopListFilms } from '../../hooks/useQueryTopListFilms';

export const TopListFilmsView = () => {
  const TopListFilms = useQueryTopListFilms();

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
      return <List moviesList={TopListFilms.data} title='Топ 10 фильмов' />;
  }
};
