import './LoginForm.css';
import { FormField } from '../FormField';
import { Button } from '../Button';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/User';
import { queryClient } from '../../api/queryClient';

const loginUserSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type loginUser = z.infer<typeof loginUserSchema>;

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUser>({
    resolver: zodResolver(loginUserSchema),
  });

  const loginMutation = useMutation(
    {
      mutationFn: login,
    },
    queryClient
  );

  return (
    <form
      className='login-form'
      onSubmit={handleSubmit((user) => {
        loginMutation.mutate(user);
      })}
    >
      <FormField label='Email' errorMessage={errors.email?.message}>
        <input {...register('email')} />
      </FormField>
      <FormField label='Пароль' errorMessage={errors.password?.message}>
        <input type='password' {...register('password')} />
      </FormField>
      <Button type='submit' isLoading={loginMutation.isPending}>
        Войти
      </Button>
    </form>
  );
};
