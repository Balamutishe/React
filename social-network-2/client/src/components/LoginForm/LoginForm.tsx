import './LoginForm.css';
import { FormField } from '../FormField';
import { Button } from '../Button';
import { FormEventHandler, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../api/User';
import { queryClient } from '../../api/queryClient';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUserMutate = useMutation(
    {
      mutationFn: () => loginUser(email, password),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    loginUserMutate.mutate();
  };

  return (
    <form className='login-form' onSubmit={handleFormSubmit}>
      <FormField label='Email'>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormField>
      <FormField label='Пароль'>
        <input
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormField>

      {loginUserMutate.error && <span>{loginUserMutate.error.message}</span>}

      <Button type='submit' isLoading={loginUserMutate.isPending}>
        Войти
      </Button>
    </form>
  );
};
