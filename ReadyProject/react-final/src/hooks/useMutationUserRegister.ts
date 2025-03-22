import { useMutation } from '@tanstack/react-query';

import { registerUser } from '../api/User';
import { queryClient } from '../api/queryClient';

export const useMutationUserRegister = (
  email: string,
  password: string,
  name: string,
  surname: string,
  setAuthState: (value: React.SetStateAction<string>) => void
) => {
  return useMutation(
    {
      mutationFn: () => registerUser(email, password, name, surname),
      onSuccess() {
        setAuthState('success');
      },
    },
    queryClient
  );
};
