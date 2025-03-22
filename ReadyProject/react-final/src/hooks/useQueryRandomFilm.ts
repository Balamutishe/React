import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient';
import { fetchRandomFilm } from '../api/Movie';

export const useQueryRandomFilm = () => {
  return useQuery(
    {
      queryKey: ['randomFilm'],
      queryFn: () => fetchRandomFilm(),
    },
    queryClient
  );
};
