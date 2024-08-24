import { useMutation } from '@tanstack/react-query';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FormField } from '../FormField';
import { Button } from '../Button';
import './NoteForm.css';
import { createNote } from '../../api/Note';
import { queryClient } from '../../api/queryClient';
import { LogoutButton } from '../LogoutButton';

const CreateNoteShema = z.object({
  title: z.string().min(5, 'заголовок должен состоять минимум из 5 символов'),
  text: z
    .string()
    .min(10, 'текст должен содержать минимум 10 символов')
    .max(300, 'текст должен содержать максимум 300 символов'),
});

type CreateNoteForm = z.infer<typeof CreateNoteShema>;

export const NoteForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNoteForm>({
    resolver: zodResolver(CreateNoteShema),
  });

  const createNoteMutation = useMutation(
    {
      mutationFn: createNote,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['notes'] });
      },
    },
    queryClient
  );

  return (
    <div>
      <form
        className='note-form'
        onSubmit={handleSubmit((note) => createNoteMutation.mutate(note))}
      >
        <FormField label='Заголовок' errorMessage={errors.title?.message}>
          <input type='text' {...register('title')} />
        </FormField>
        <FormField label='Текст' errorMessage={errors.text?.message}>
          <textarea {...register('text')} />
        </FormField>
        <Button>Сохранить</Button>
      </form>
      <LogoutButton />
    </div>
  );
};
