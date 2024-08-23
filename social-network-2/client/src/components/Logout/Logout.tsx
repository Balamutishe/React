import { useMutation } from '@tanstack/react-query';

import { Button } from '../Button';
import { queryClient } from '../../api/queryClient';
import { logoutUser } from '../../api/User';

export const Logout = () => {
  const logoutUserMutate = useMutation(
    {
      mutationFn: () => logoutUser(),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  return <Button onClick={() => logoutUserMutate.mutate()}>Выйти</Button>;
};
