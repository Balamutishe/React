import { useSearchParams } from 'react-router-dom';

import { List } from './List';
import { useQueryListFilms } from '../../hooks/useQueryListFilms';

export const ListFilmsView = () => {
  const [serachParam] = useSearchParams();

  const searchParamFilms = serachParam.get('genre') || '';

  const ListFilms = useQueryListFilms(`genre=${searchParamFilms}`);

  switch (ListFilms.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => ListFilms.refetch()}>Повторить запрос</button>
        </div>
      );
    case 'success':
      return (
        <>
          {ListFilms.data.length !== 0 ? (
            <List moviesList={ListFilms.data} title={searchParamFilms} />
          ) : (
            <List moviesList={ListFilms.data} title="Список пуст" />
          )}
        </>
      );
  }
};
