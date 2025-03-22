import { FormField } from '../FormField';
import { Button } from '../Button';
import './RegisterForm.css';
import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../api/User';
import { queryClient } from '../../api/queryClient';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const RegisterUserShema = z.object({
  username: z.string().min(5, 'имя должно быть не короче 5 символов'),
  email: z.string().email('введите корректный E-mail'),
  password: z.string().min(8, 'пароль должен состоять минимум из 8 символов'),
});

type RegisterUserForm = z.infer<typeof RegisterUserShema>;

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserForm>({
    resolver: zodResolver(RegisterUserShema),
  });

  const registerUserMutation = useMutation(
    {
      mutationFn: registerUser,
    },
    queryClient
  );

  return (
    <form
      className='register-form'
      onSubmit={handleSubmit((registerUser) =>
        registerUserMutation.mutate(registerUser)
      )}
    >
      <FormField label='Имя' errorMessage={errors.username?.message}>
        <input {...register('username')} />
      </FormField>
      <FormField label='Email' errorMessage={errors.email?.message}>
        <input {...register('email')} />
      </FormField>
      <FormField label='Пароль' errorMessage={errors.password?.message}>
        <input {...register('password')} />
      </FormField>

      <Button type='submit' isLoading={registerUserMutation.isPending}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
