import { FC } from 'react';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { InputContainer } from '../Input/InputContainer';
import MailLogo from '../../assets/mail.svg?react';
import UserLogo from '../../assets/userdata.svg?react';
import PasswordLogo from '../../assets/password.svg?react';

import './Form.css';

interface IFormProps {
  variant: 'register' | 'login' | 'success';
}

export const Form: FC<IFormProps> = ({ variant }) => {
  return (
    <form className='form'>
      {variant === 'register' && <h2 className='form__title'>Регистрация</h2>}
      {variant !== 'success' ? (
        <div className='form__inputs'>
          <InputContainer variant='light'>
            <MailLogo />
            <Input
              type='email'
              placeholder='Электронная почта'
              variant='light'
            />
          </InputContainer>
          {variant === 'register' && (
            <InputContainer variant='light'>
              <UserLogo />
              <Input type='text' placeholder='Имя' variant='light' />
            </InputContainer>
          )}
          {variant === 'register' && (
            <InputContainer variant='light'>
              <UserLogo />
              <Input type='text' placeholder='Фамилия' variant='light' />
            </InputContainer>
          )}
          <InputContainer variant='light'>
            <PasswordLogo />
            <Input type='password' placeholder='Пароль' variant='light' />
          </InputContainer>
          {variant === 'register' && (
            <InputContainer variant='light'>
              <PasswordLogo />
              <Input
                type='password'
                placeholder='Подтвердите пароль'
                variant='light'
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
