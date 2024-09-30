import { FC, useState, FormEventHandler } from 'react';
import { useMutation } from '@tanstack/react-query';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { InputContainer } from '../Input/InputContainer';
import { registerUser } from '../../api/User';
import { loginUser } from '../../api/User';
import { queryClient } from '../../api/queryClient';
import MailLogo from '../../assets/mail.svg?react';
import UserLogo from '../../assets/userdata.svg?react';
import PasswordLogo from '../../assets/password.svg?react';

import './Form.css';

interface IFormProps {
  variant: 'register' | 'login' | 'success';
}

export const Form: FC<IFormProps> = ({ variant }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerMutation = useMutation(
    {
      mutationFn: () => registerUser(email, password, name, surname),
    },
    queryClient
  );

  const userLoginMutation = useMutation(
    {
      mutationFn: () => loginUser(email, password),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    switch (variant) {
      case 'register':
        return registerMutation.mutate();
      case 'login':
        return userLoginMutation.mutate();
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      {variant === 'register' && <h2 className='form__title'>Регистрация</h2>}
      {variant !== 'success' ? (
        <div className='form__inputs'>
          <InputContainer variant='light'>
            <MailLogo />
            <Input
              value={email}
              type='email'
              placeholder='Электронная почта'
              variant='light'
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputContainer>
          {variant === 'register' && (
            <InputContainer variant='light'>
              <UserLogo />
              <Input
                value={name}
                type='text'
                placeholder='Имя'
                variant='light'
                onChange={(event) => setName(event.target.value)}
              />
            </InputContainer>
          )}
          {variant === 'register' && (
            <InputContainer variant='light'>
              <UserLogo />
              <Input
                value={surname}
                type='text'
                placeholder='Фамилия'
                variant='light'
                onChange={(event) => setSurname(event.target.value)}
              />
            </InputContainer>
          )}
          <InputContainer variant='light'>
            <PasswordLogo />
            <Input
              value={password}
              type='password'
              placeholder='Пароль'
              variant='light'
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputContainer>
          {variant === 'register' && (
            <InputContainer variant='light'>
              <PasswordLogo />
              <Input
                value={confirmPassword}
                type='password'
                placeholder='Подтвердите пароль'
                variant='light'
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </InputContainer>
          )}
        </div>
      ) : (
        <p className='form__text'>
          Используйте вашу электронную почту для входа
        </p>
      )}

      <Button
        title={variant === 'register' ? 'Создать аккаунт' : 'Войти'}
        variant='primary'
      />
    </form>
  );
};
