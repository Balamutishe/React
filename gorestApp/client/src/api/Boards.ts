import { z } from "zod";
import { validateResponse } from "./validateResponse";

const BoardSchema = z.object({
  _id: z.string(),
  boardTitle: z.string(),
  created_at: z.number(),
});

export type TBoard = z.infer<typeof BoardSchema>;

export const BoardsListSchema = z.array(BoardSchema);

export type TBoardsList = z.infer<typeof BoardsListSchema>;

export async function fetchGetBoardsList(): Promise<TBoardsList> {
  return fetch("/api/boards", {
    method: "GET",
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => BoardsListSchema.parse(data));
}

export async function fetchGetOneBoard(id: string): Promise<TBoard> {
  return fetch(`/api/boards/${id}`, {
    method: "GET",
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => BoardSchema.parse(data));
}

export async function fetchAddBoard(): Promise<void> {
  return fetch("/api/boards", {
    method: "POST",
  })
    .then(validateResponse)
    .then(() => undefined);
}

export async function fetchChangeBoard(
  id: string,
  boardTitle: string
): Promise<void> {
  return fetch(`/api/boards/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      boardTitle,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export async function fetchDeleteBoard(id: string): Promise<void> {
  return fetch(`/api/boards/${id}`, {
    method: "DELETE",
  })
    .then(validateResponse)
    .then(() => undefined);
}
