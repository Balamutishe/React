import { useQuery } from '@tanstack/react-query';
import { fetchNotesList } from '../../api/Note';
import { queryClient } from '../../api/queryClient';
import { NotesListView } from './NotesListView';
import { Loader } from '../Loader';

export const FetchNotesListView = () => {
  const notesListQuery = useQuery(
    {
      queryFn: () => fetchNotesList(),
      queryKey: ['notes'],
    },
    queryClient
  );

  switch (notesListQuery.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => notesListQuery.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return <NotesListView notesList={notesListQuery.data.list} />;
    case 'pending':
      return <Loader />;
  }
};
