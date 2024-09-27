import { FC } from 'react';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { InputContainer } from '../Input/InputContainer';

import './Form.css';

interface IFormProps {
  variant: 'register' | 'auth' | 'success';
  title?: string;
}

export const Form: FC<IFormProps> = ({ variant, title }) => {
  return (
    <form className='form'>
      <h2>{title && <h2 className='form__title'>{title}</h2>}</h2>
      <InputContainer variant='light'>
        <Input type='email' placeholder='Электронная почта' variant='light' />
      </InputContainer>
      <InputContainer variant='light'>
        <Input type='text' placeholder='Имя' variant='light' />
      </InputContainer>
      <InputContainer variant='light'>
        <Input type='text' placeholder='Фамилия' variant='light' />
      </InputContainer>
      <InputContainer variant='light'>
        <Input type='password' placeholder='Пароль' variant='light' />
      </InputContainer>
      <InputContainer variant='light'>
        <Input
          type='password'
          placeholder='Подтвердите пароль'
          variant='light'
        />
      </InputContainer>
      <Button
        title={variant === 'register' ? 'Создать аккаунт' : 'Войти'}
        variant='primary'
      />
    </form>
  );
};
