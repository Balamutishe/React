import { useQuery } from '@tanstack/react-query';

import { queryClient } from '../api/queryClient';
import { fetchUser } from '../api/User';

export const useQueryUser = () => {
  return useQuery(
    {
      queryFn: () => fetchUser(),
      queryKey: ['users', 'me'],
      retry: false,
    },
    queryClient
  );
};
