import { useQuery } from '@tanstack/react-query';
import { fetchListTopFilms } from '../api/Movie';
import { queryClient } from '../api/queryClient';

export const useQueryTopListFilms = () => {
  return useQuery(
    {
      queryKey: ['topFilms'],
      queryFn: () => fetchListTopFilms(),
    },
    queryClient
  );
};
