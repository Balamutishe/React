import { useQuery } from '@tanstack/react-query';

import { fetchListFilms } from '../api/Movie';
import { queryClient } from '../api/queryClient';

export const useQueryListFilms = (searchFilm: string) => {
  return useQuery(
    {
      queryKey: ['list-films'],
      queryFn: () => fetchListFilms(searchFilm),
    },
    queryClient
  );
};
