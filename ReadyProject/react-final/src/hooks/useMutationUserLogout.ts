import { useMutation } from '@tanstack/react-query';

import { logoutUser } from '../api/User';
import { queryClient } from '../api/queryClient';

export const useMutationUserLogout = () => {
  return useMutation(
    {
      mutationFn: () => logoutUser(),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );
};
