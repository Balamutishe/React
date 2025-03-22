import './LoginForm.css';
import { FormField } from '../FormField';
import { Button } from '../Button';
import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../api/User';
import { queryClient } from '../../api/queryClient';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const LoginUserShema = z.object({
  email: z.string().email('введите корректный E-mail'),
  password: z.string().min(8, 'пароль должен состоять минимум из 8 символов'),
});

type LoginUserForm = z.infer<typeof LoginUserShema>;

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserForm>({
    resolver: zodResolver(LoginUserShema),
  });

  const loginUserMutate = useMutation(
    {
      mutationFn: loginUser,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  return (
    <form
      className='login-form'
      onSubmit={handleSubmit((loginUser) => loginUserMutate.mutate(loginUser))}
    >
      <FormField label='Email' errorMessage={errors.email?.message}>
        <input {...register('email')} />
      </FormField>
      <FormField label='Пароль' errorMessage={errors.password?.message}>
        <input type='password' {...register('password')} />
      </FormField>

      <Button type='submit' isLoading={loginUserMutate.isPending}>
        Войти
      </Button>
    </form>
  );
};
