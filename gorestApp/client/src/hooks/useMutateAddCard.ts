import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { fetchAddNote } from "../api/Notes";
import { fetchAddBoard } from "../api/Boards";

export const useMutateAddCard = (variant: "note" | "board", boardId?: string) =>
  useMutation(
    {
      mutationFn: () =>
        variant === "note" && boardId ? fetchAddNote(boardId) : fetchAddBoard(),
    },
    queryClient
  );
