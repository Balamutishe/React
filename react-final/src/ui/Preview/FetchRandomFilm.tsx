import { useQuery } from '@tanstack/react-query';
import { fetchRandomFilm } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';
import { PreviewFilm } from './PreviewFilm';

export const FetchRandomFilm = () => {
  const queryRandomList = useQuery(
    {
      queryKey: ['randomFilm'],
      queryFn: () => fetchRandomFilm(),
    },
    queryClient
  );

  switch (queryRandomList.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryRandomList.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return (
        <PreviewFilm
          data={queryRandomList.data}
          refetch={queryRandomList.refetch}
          variant='random'
        />
      );
  }
};
