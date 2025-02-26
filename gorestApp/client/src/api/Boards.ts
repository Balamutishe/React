import { z } from "zod";

const NoteSchema = z.object({
  id: z.string(),
  text: z.string(),
});

export type TNote = z.infer<typeof NoteSchema>;

export const NoteListSchema = z.array(NoteSchema);

export type TNoteList = z.infer<typeof NoteListSchema>;

const BoardSchema = z.object({
  id: z.string(),
  boardTitle: z.string(),
  boardNotes: NoteListSchema,
});

export type TBoard = z.infer<typeof BoardSchema>;

export const BoardsListSchema = z.array(BoardSchema);

export type TBoardsList = z.infer<typeof BoardsListSchema>;

export const boardsList: TBoardsList = [
  {
    id: crypto.randomUUID(),
    boardTitle: "Игры",
    boardNotes: [
      {
        id: crypto.randomUUID(),
        text: "Assassins Creeed",
      },
      {
        id: crypto.randomUUID(),
        text: "Kingdom come deliverance",
      },
      {
        id: crypto.randomUUID(),
        text: "Alone in the dark",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    boardTitle: "Покупки",
    boardNotes: [
      {
        id: crypto.randomUUID(),
        text: "Помидоры",
      },
      {
        id: crypto.randomUUID(),
        text: "Огурцы",
      },
      {
        id: crypto.randomUUID(),
        text: "Кетчуп",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    boardTitle: "Заметки",
    boardNotes: [
      {
        id: crypto.randomUUID(),
        text: "Сделать приложение с заметками",
      },
      {
        id: crypto.randomUUID(),
        text: "Устроиться на работу",
      },
      {
        id: crypto.randomUUID(),
        text: "Дособрать комп",
      },
    ],
  },
];

export const findBoardNotes = (boardId: string): TBoard | undefined => {
  return boardsList.find((board) => board.id === boardId);
};
