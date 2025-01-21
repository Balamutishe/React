import { validateResponse } from "./validateResponse";
import { z } from "zod";

export const NoteShema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
});

export type Note = z.infer<typeof NoteShema>;

export const NotesListShema = z.array(NoteShema);

export type NotesList = z.infer<typeof NotesListShema>;

export const FetchNoteListShema = z.array(NoteShema);

export type FetchNotesList = z.infer<typeof FetchNoteListShema>;

export function fetchNotesList(): Promise<FetchNotesList> {
  return fetch("/api")
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => FetchNoteListShema.parse(data));
}

export function createNote(title: string, text: string) {
  return fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      text,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function findNote(id: string) {
  return fetch(`/api/notes/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json());
}

export function deleteNote(id: string) {
  return fetch(`/api/notes/${id}`, {
    method: "DELETE",
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function changeNote(id: string, noteTitle: string, noteText: string) {
  return fetch(`/api/notes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      noteTitle,
      noteText,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json());
}
