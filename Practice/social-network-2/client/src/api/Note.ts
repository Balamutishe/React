import { z } from 'zod';
import { validateResponse } from '../api/validateResponse';

export const NoteShema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
  userId: z.string(),
  createdAt: z.number(),
});

export type Note = z.infer<typeof NoteShema>;

export const NotesListShema = z.array(NoteShema);

export type NotesList = z.infer<typeof NotesListShema>;

export const FetchNoteListShema = z.object({
  list: NotesListShema,
  pageCount: z.number(),
});

export type FetchNotesList = z.infer<typeof FetchNoteListShema>;

export function fetchNotesList(): Promise<FetchNotesList> {
  return fetch('/api/notes')
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => FetchNoteListShema.parse(data));
}

export function createNote({
  title,
  text,
}: {
  title: string;
  text: string;
}): Promise<void> {
  return fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      text,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}
