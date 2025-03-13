import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../api/queryClient";
import { fetchAddNote } from "../api/Notes";
import { fetchAddBoard } from "../api/Boards";
import { useQueryNotesList } from "./useQueryNotesList";
import { useQueryBoardsList } from "./useQueryBoardsList";

export const useMutateAddCard = (
  variant: "note" | "board",
  boardId?: string
) => {
  const queryBoardsList = useQueryBoardsList();
  const queryNotesList = useQueryNotesList();

  return useMutation(
    {
      mutationFn: () =>
        variant === "note" && boardId ? fetchAddNote(boardId) : fetchAddBoard(),
      onSuccess: () =>
        variant === "note"
          ? queryNotesList.refetch()
          : queryBoardsList.refetch(),
    },
    queryClient
  );
};
