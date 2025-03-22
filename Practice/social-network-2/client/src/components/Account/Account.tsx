import { useQuery } from '@tanstack/react-query';
import { fetchUserMe } from '../../api/User';
import { queryClient } from '../../api/queryClient';
import { Loader } from '../Loader';
import { AuthForm } from '../AuthForm';
import { NoteForm } from '../NoteForm';
import { FetchNotesListView } from '../NotesListView/FetchNotesListView';

export const Account = () => {
  const queryMe = useQuery(
    {
      queryFn: () => fetchUserMe(),
      queryKey: ['users', 'me'],
      retry: false,
    },
    queryClient
  );

  switch (queryMe.status) {
    case 'pending':
      return <Loader />;
    case 'error':
      return <AuthForm />;
    case 'success':
      return (
        <>
          <NoteForm />
          <FetchNotesListView />
        </>
      );
  }
};
