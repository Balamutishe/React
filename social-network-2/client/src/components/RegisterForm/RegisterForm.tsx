import { FormField } from '../FormField';
import { Button } from '../Button';
import './RegisterForm.css';
import { FC, FormEventHandler, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../api/User';
import { queryClient } from '../../api/queryClient';

export const RegisterForm: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUserMutation = useMutation(
    {
      mutationFn: () => registerUser(username, email, password),
      onSuccess() {
        setUsername('');
        setPassword('');
        setEmail('');
      },
    },
    queryClient
  );

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    registerUserMutation.mutate();
  };

  return (
    <form className='register-form' onSubmit={handleFormSubmit}>
      <FormField label='Имя'>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormField>
      <FormField label='Email'>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormField>
      <FormField label='Пароль'>
        <input
          value={password}
          type='password'
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormField>

      {registerUserMutation.error && (
        <span>{registerUserMutation.error.message}</span>
      )}

      <Button>Зарегистрироваться</Button>
    </form>
  );
};
