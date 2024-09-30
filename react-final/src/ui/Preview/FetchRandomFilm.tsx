import { useQuery } from '@tanstack/react-query';
import { fetchRandomFilm } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';
import { PreviewFilm } from './PreviewFilm';

export const FetchRandomFilm = () => {
  const randomListQuery = useQuery(
    {
      queryKey: ['randomFilm'],
      queryFn: () => fetchRandomFilm(),
    },
    queryClient
  );

  switch (randomListQuery.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => randomListQuery.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return <PreviewFilm data={randomListQuery.data} />;
  }
};
