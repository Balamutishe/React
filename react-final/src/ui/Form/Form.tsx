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
  handleSetVisibility: () => void;
}

export const Form: FC<IFormProps> = ({ handleSetVisibility }) => {
  const [authState, setAuthState] = useState('success');

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerMutation = useMutation(
    {
      mutationFn: () => registerUser(email, password, name, surname),
      onSuccess() {
        setAuthState('success');
      },
    },
    queryClient
  );

  const userLoginMutation = useMutation(
    {
      mutationFn: () => loginUser(email, password),
      onSuccess() {
        handleSetVisibility();
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    switch (authState) {
      case 'register':
        return registerMutation.mutate();
      case 'login':
        return userLoginMutation.mutate();
      case 'success':
        return setAuthState('login');
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        {authState === 'register' && (
          <h2 className='form__title'>Регистрация</h2>
        )}
        {authState === 'success' && (
          <h2 className='form__title'>Регистрация завершена</h2>
        )}
        {authState !== 'success' ? (
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
            {authState === 'register' && (
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
            {authState === 'register' && (
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
            {authState === 'register' && (
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
          title={authState === 'register' ? 'Создать аккаунт' : 'Войти'}
          variant='primary'
        />
      </form>
      {authState !== 'success' && (
        <div className='form-variant-switch'>
          {authState === 'register' ? (
            <button
              className='form-variant-switch__button'
              onClick={() => setAuthState('login')}
            >
              У меня есть пароль
            </button>
          ) : (
            <button
              className='form-variant-switch__button'
              onClick={() => setAuthState('register')}
            >
              Регистрация
            </button>
          )}
        </div>
      )}
    </>
  );
};
