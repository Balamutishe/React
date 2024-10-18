import { useQuery } from '@tanstack/react-query';
import { fetchListFilms } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';
import { List } from './List';
import { useSearchParams } from 'react-router-dom';

export const FetchListFilms = () => {
  const [serachParam] = useSearchParams();

  const searchParamFilms = serachParam.get('genre') || '';

  const queryListFilms = useQuery(
    {
      queryKey: ['list-films'],
      queryFn: () => fetchListFilms(`genre=${searchParamFilms}`),
    },
    queryClient
  );

  switch (queryListFilms.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryListFilms.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return (
        <>
          {queryListFilms.data.length !== 0 ? (
            <List moviesList={queryListFilms.data} title={searchParamFilms} />
          ) : (
            <List moviesList={queryListFilms.data} title='Список пуст' />
          )}
        </>
      );
  }
};
