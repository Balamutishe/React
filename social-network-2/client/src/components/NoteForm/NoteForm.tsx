import { useMutation } from '@tanstack/react-query';
import { useState, FormEventHandler } from 'react';

import { FormField } from '../FormField';
import { Button } from '../Button';
import './NoteForm.css';
import { createNote } from '../../api/Note';
import { queryClient } from '../../api/queryClient';
import { LogoutButton } from '../LogoutButton';

export const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const createNoteMutation = useMutation(
    {
      mutationFn: () => createNote(title, text),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['notes'] });
      },
    },
    queryClient
  );

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    createNoteMutation.mutate();
  };

  return (
    <div>
      <form className='note-form' onSubmit={handleFormSubmit}>
        <FormField label='Заголовок'>
          <input
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormField>
        <FormField label='Текст'>
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </FormField>
        <Button>Сохранить</Button>
      </form>
      <LogoutButton />
    </div>
  );
};
