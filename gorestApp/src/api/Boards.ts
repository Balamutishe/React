import { z } from "zod";

const BoardSchema = z.object({
  boardTitle: z.string(),
  boardNotes: z.array(z.string()),
});

export type TBoard = z.infer<typeof BoardSchema>;

export const BoardsListSchema = z.array(BoardSchema);

export type TBoardsList = z.infer<typeof BoardsListSchema>;

export const boardsList: TBoardsList = [
  {
    boardTitle: "Игры",
    boardNotes: [
      "Assassins Creeed",
      "Alone in the dark",
      "Kingdom come deliverance",
    ],
  },
  {
    boardTitle: "Покупки",
    boardNotes: ["Помидоры", "Огурцы", "Кетчуп"],
  },
  {
    boardTitle: "Заметки",
    boardNotes: [
      "Сделать приложение с заметками",
      "Устроиться на работу",
      "Дособрать комп",
    ],
  },
];
