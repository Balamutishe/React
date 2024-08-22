import { FormField } from '../FormField';
import { Button } from '../Button';
import './NoteForm.css';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../api/queryClient';
import { logoutUser } from '../../api/User';

export const NoteForm = () => {
  const logoutUserMutate = useMutation(
    {
      mutationFn: () => logoutUser(),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      },
    },
    queryClient
  );

  return (
    <div>
      <form className='note-form'>
        <FormField label='Заголовок'>
          <input type='text' />
        </FormField>
        <FormField label='Текст'>
          <textarea />
        </FormField>
        <Button>Сохранить</Button>
      </form>
      <Button onClick={() => logoutUserMutate.mutate()}>Выйти</Button>
    </div>
  );
};
