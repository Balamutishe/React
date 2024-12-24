import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient';

import { fetchListFavoritesFilms } from '../api/Movie';

export const useQueryListFavoritesFilms = () => {
  return useQuery(
    {
      queryFn: () => fetchListFavoritesFilms(),
      queryKey: ['favoritesFilms'],
    },
    queryClient
  );
};
