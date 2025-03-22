import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient';

import { fetchFilmsGenres } from '../api/Movie';

export const useQueryGenresFilms = () => {
  return useQuery(
    {
      queryKey: ['film', 'genres'],
      queryFn: () => fetchFilmsGenres(),
    },
    queryClient
  );
};
