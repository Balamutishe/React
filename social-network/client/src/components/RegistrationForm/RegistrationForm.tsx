import { FC } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormField } from '../FormField';
import { Button } from '../Button';
import './RegistrationForm.css';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../api/User';
import { queryClient } from '../../api/queryClient';

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

export const RegistrationForm: FC = () => {
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
      className='registration-form'
      onSubmit={handleSubmit((user) => {
        registerMutation.mutate(user);
      })}
    >
      <FormField
        label='Имя пользователя'
        errorMessage={errors.username?.message}
      >
        <input {...register('username')} />
      </FormField>

      <FormField
        label='E-mail пользователя'
        errorMessage={errors.email?.message}
      >
        <input {...register('email')} />
      </FormField>

      <FormField label='Пароль' errorMessage={errors.password?.message}>
        <input {...register('password')} />
      </FormField>

      <Button
        type='submit'
        title='Зарегистрироваться'
        isLoading={registerMutation.isPending}
      />
    </form>
  );
};
