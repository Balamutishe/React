import { FC } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { FormField } from '../FormField';
import { Button } from '../Button';
import { registerUser } from '../../api/User';
import { queryClient } from '../../api/queryClient';
import './RegisterForm.css';

const registerUserSchema = z.object({
  email: z.string().email('Введите корректный E-mail'),
  username: z
    .string()
    .min(5, 'В имени пользователя должно быть не менее 5 символов'),
  password: z
    .string()
    .min(8, 'Пароль должен состоять не менее чем из 8 символов'),
});

type createRegisterForm = z.infer<typeof registerUserSchema>;

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createRegisterForm>({
    resolver: zodResolver(registerUserSchema),
  });

  const registerMutation = useMutation(
    {
      mutationFn: registerUser,
    },
    queryClient
  );

  return (
    <form
      className='register-form'
      onSubmit={handleSubmit((user) => {
        registerMutation.mutate(user);
      })}
    >
      <FormField label='Имя' errorMessage={errors.username?.message}>
        <input {...register('username')} />
      </FormField>
      <FormField label='Email' errorMessage={errors.email?.message}>
        <input {...register('email')} />
      </FormField>
      <FormField label='Пароль' errorMessage={errors.password?.message}>
        <input type='password' {...register('password')} />
      </FormField>
      <Button type='submit' isLoading={registerMutation.isPending}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
