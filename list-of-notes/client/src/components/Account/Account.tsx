import { useQuery } from '@tanstack/react-query';
import { fetchMe } from '../../api/User';
import { queryClient } from '../../api/queryClient';
import { Loader } from '../Loader';
import { AuthForm } from '../AuthForm';
import { NoteForm } from '../NoteForm';

export const Account = () => {
  const meQuery = useQuery(
    {
      queryFn: () => fetchMe(),
      queryKey: ['users', 'me'],
    },
    queryClient
  );

  switch (meQuery.status) {
    case 'pending':
      return <Loader />;
    case 'success':
      return <NoteForm />;
    case 'error':
      return <AuthForm />;
  }
};
