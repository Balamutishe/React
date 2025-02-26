import { z } from "zod";
import { validateResponse } from "./validateResponse";

const NoteSchema = z.object({
  _id: z.string(),
  noteText: z.string(),
  created_at: z.number(),
  boardId: z.string(),
});

export type TNote = z.infer<typeof NoteSchema>;

export const NoteListSchema = z.array(NoteSchema);

export type TNotesList = z.infer<typeof NoteListSchema>;

export async function fetchGetNotesList(): Promise<TNotesList> {
  return fetch("/api/notes", {
    method: "GET",
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => NoteListSchema.parse(data));
}

export async function fetchGetOneNote(id: string): Promise<TNote> {
  return fetch(`/api/notes/:${id}`, {
    method: "GET",
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => NoteSchema.parse(data));
}

export async function fetchAddNote(
  boardId: string,
  noteText: string
): Promise<void> {
  return fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      boardId,
      noteText,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export async function fetchChangeNote(
  id: string,
  noteText: string
): Promise<void> {
  return fetch(`/api/notes/:${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      noteText,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export async function fetchDeleteNote(id: string): Promise<void> {
  return fetch(`/api/notes/${id}`, {
    method: "DELETE",
  })
    .then(validateResponse)
    .then(() => undefined);
}
