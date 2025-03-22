import { useQuery } from '@tanstack/react-query';
import { fetchFilm } from '../api/Movie';
import { queryClient } from '../api/queryClient';

export const useQueryFilm = (id: number) =>
  useQuery(
    {
      queryKey: ['film', 'id'],
      queryFn: () => fetchFilm(Number(id)),
    },
    queryClient
  );
