import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../Button';
import { FormField } from '../FormField';
import './PostForm.css';
import { createPost } from '../../api/Post';
import { queryClient } from '../../api/queryClient';

export interface IPostFormProps {}

const createPostShema = z.object({
  text: z.string().min(10, 'Длинна поста должна быть не менее 10 символов'),
});

type CreatePostForm = z.infer<typeof createPostShema>;

export const PostForm: FC<IPostFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostForm>({
    resolver: zodResolver(createPostShema),
  });

  const postMutation = useMutation(
    {
      mutationFn: createPost,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['posts'] });
      },
    },
    queryClient
  );

  return (
    <form
      onSubmit={handleSubmit(({ text }) => postMutation.mutate(text))}
      className='post-form'
    >
      <FormField label='Текст поста' errorMessage={errors.text?.message}>
        <textarea className='post-form__input' {...register('text')} />
      </FormField>

      <Button
        type='submit'
        title='Опубликовать'
        isLoading={postMutation.isPending}
      />
    </form>
  );
};
