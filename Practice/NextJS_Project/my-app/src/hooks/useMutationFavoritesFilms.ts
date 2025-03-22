import { useMutation } from '@tanstack/react-query';

import { useQueryUser } from '../hooks/useQueryUser';
import { queryClient } from '../api/queryClient';

export const useMutationFavoritesFilms = (
  id: string,
  mutateVariant: (id: string) => Promise<void>
) => {
  const queryUser = useQueryUser();

  return useMutation(
    {
      mutationFn: () => mutateVariant(id),
      onSuccess() {
        queryUser.refetch();
      },
    },
    queryClient
  );
};
