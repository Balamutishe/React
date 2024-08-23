import { useMutation } from '@tanstack/react-query';
import { Button } from '../Button';
import { queryClient } from '../../api/queryClient';
import { logoutUser } from '../../api/User';
import './LogoutButton.css';

export const LogoutButton = () => {
  const logoutUserMutate = useMutation(
    {
      mutationFn: () => logoutUser(),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  return (
    <div className='logout-button'>
      <Button kind='secondary' onClick={() => logoutUserMutate.mutate()}>
        Выйти
      </Button>
    </div>
  );
};
