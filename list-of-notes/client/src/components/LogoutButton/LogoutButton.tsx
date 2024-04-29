import { useMutation } from '@tanstack/react-query';
import { Button } from '../Button';
import './LogoutButton.css';
import { logout } from '../../api/User';
import { queryClient } from '../../api/queryClient';

export const LogoutButton = () => {
  const logoutMutation = useMutation(
    {
      mutationFn: logout,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  return (
    <div className='logout-button'>
      <Button
        kind='secondary'
        type='submit'
        onClick={() => logoutMutation.mutate()}
        isLoading={logoutMutation.isPending}
      >
        Выйти
      </Button>
    </div>
  );
};
