import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { fetchAddNote } from "../api/Notes";
import { fetchAddBoard } from "../api/Boards";

export const useMutateAddCard = (
  variant: string,
  text: string,
  boardId?: string
) =>
  useMutation(
    {
      mutationFn: () =>
        variant === "note" && boardId
          ? fetchAddNote(boardId, text)
          : fetchAddBoard(text),
    },
    queryClient
  );
