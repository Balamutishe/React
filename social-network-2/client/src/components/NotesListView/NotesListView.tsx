import './NotesListView.css';
import { NoteView } from '../NoteView';
import { NotesList } from '../../api/Note';
import { FC } from 'react';

interface NotesListViewProps {
  notesList: NotesList;
}

export const NotesListView: FC<NotesListViewProps> = ({ notesList }) => {
  return (
    <ul className='note-list-view'>
      {notesList.map((note) => (
        <li key={note.id}>
          <NoteView note={note} />
        </li>
      ))}
    </ul>
  );
};