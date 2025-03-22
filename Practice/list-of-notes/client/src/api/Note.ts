import { validateResponse } from './validateResponse';
import { z } from 'zod';

export const NoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
  userId: z.string(),
  createdAt: z.number(),
});

export type Note = z.infer<typeof NoteSchema>;

export const NotesList = z.array(NoteSchema);

export type NotesList = z.infer<typeof NotesList>;

export const FetchNotesListSchema = z.object({
  list: NotesList,
  pageCount: z.number(),
});

export type FetchNotesListResponse = z.infer<typeof FetchNotesListSchema>;

export function fetchNotesList(): Promise<FetchNotesListResponse> {
  return fetch(`/api/notes`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => FetchNotesListSchema.parse(data));
}

export function createNote({
  title,
  text,
}: {
  title: string;
  text: string;
}): Promise<void> {
  return fetch(`/api/notes`, {
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
