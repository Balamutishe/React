import { FC } from 'react';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { InputContainer } from '../Input/InputContainer';
import MailLogo from '../../assets/mail.svg?react';
import UserLogo from '../../assets/userdata.svg?react';
import PasswordLogo from '../../assets/password.svg?react';

import './Form.css';

interface IFormProps {
  variant: 'register' | 'auth' | 'success';
  title?: string;
}

export const Form: FC<IFormProps> = ({ variant, title }) => {
  return (
    <form className='form'>
      {title && <h2 className='form__title'>{title}</h2>}
      <div className='form__inputs'>
        <InputContainer variant='light'>
          <MailLogo />
          <Input type='email' placeholder='Электронная почта' variant='light' />
        </InputContainer>
        <InputContainer variant='light'>
          <UserLogo />
          <Input type='text' placeholder='Имя' variant='light' />
        </InputContainer>
        <InputContainer variant='light'>
          <UserLogo />
          <Input type='text' placeholder='Фамилия' variant='light' />
        </InputContainer>
        <InputContainer variant='light'>
          <PasswordLogo />
          <Input type='password' placeholder='Пароль' variant='light' />
        </InputContainer>
        <InputContainer variant='light'>
          <PasswordLogo />
          <Input
            type='password'
            placeholder='Подтвердите пароль'
            variant='light'
          />
        </InputContainer>
      </div>

      <Button
        title={variant === 'register' ? 'Создать аккаунт' : 'Войти'}
        variant='primary'
      />
    </form>
  );
};
