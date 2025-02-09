import { validateResponse } from "./validateResponse";
import { z } from "zod";

export const NoteShema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  created_at: z.string(),
});

export type TNote = z.infer<typeof NoteShema>;

export const NotesListShema = z.array(NoteShema);

export type NotesList = z.infer<typeof NotesListShema>;

export const FetchNoteListShema = z.array(NoteShema);

export type FetchNotesList = z.infer<typeof FetchNoteListShema>;

export function fetchNotesList(): Promise<FetchNotesList> {
  return fetch("/api/notes")
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => FetchNoteListShema.parse(data));
}

export function createNote(title: string, description: string) {
  return fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function fetchNote(id: string) {
  return fetch(`/api/notes/${id}`, {
    method: "GET",
  })
    .then(validateResponse)
    .then((response) => response.json());
}

export function deleteNote(id: number) {
  return fetch(`/api/notes/${id}`, {
    method: "DELETE",
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function changeNote(id: number, title: string, description: string) {
  return fetch(`/api/notes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json());
}
