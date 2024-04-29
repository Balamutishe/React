import { FormField } from '../FormField';
import { Button } from '../Button';
import './NoteForm.css';
import { z } from 'zod';
import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createNote } from '../../api/Note';
import { queryClient } from '../../api/queryClient';
import { LogoutButton } from '../LogoutButton';

const createNoteSchema = z.object({
  title: z
    .string()
    .min(5, 'Длинна заголовка заметки должна быть не менее 5 символов'),
  text: z
    .string()
    .min(10, 'Длинна текста заметки должна быть не менее 10 символов'),
});

type createNoteForm = z.infer<typeof createNoteSchema>;

export const NoteForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createNoteForm>({
    resolver: zodResolver(createNoteSchema),
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
    <form
      className='note-form'
      onSubmit={handleSubmit((note) => {
        createNoteMutation.mutate(note);
      })}
    >
      <FormField label='Заголовок' errorMessage={errors.title?.message}>
        <input type='text' {...register('title')} />
      </FormField>
      <FormField label='Текст' errorMessage={errors.text?.message}>
        <textarea {...register('text')} />
      </FormField>
      <Button type='submit' isLoading={createNoteMutation.isPending}>
        Сохранить
      </Button>
      <LogoutButton />
    </form>
  );
};
