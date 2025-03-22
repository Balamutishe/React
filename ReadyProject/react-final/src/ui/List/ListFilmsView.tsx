import { useSearchParams } from 'react-router-dom';

import { List } from './List';
import { useQueryListFilms } from '../../hooks/useQueryListFilms';

export const ListFilmsView = () => {
  const [serachParam] = useSearchParams();

  const searchParamFilms = serachParam.get('genre') || '';

  const listFilms = useQueryListFilms(`genre=${searchParamFilms}`);

  switch (listFilms.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => listFilms.refetch()}>Повторить запрос</button>
        </div>
      );
    case 'success':
      return (
        <>
          {listFilms.data.length !== 0 ? (
            <List moviesList={listFilms.data} title={searchParamFilms} />
          ) : (
            <List moviesList={listFilms.data} title="Список пуст" />
          )}
        </>
      );
  }
};
