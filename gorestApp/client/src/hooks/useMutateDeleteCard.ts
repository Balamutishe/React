import { useMutation } from "@tanstack/react-query";

import { fetchDeleteBoard } from "../api/Boards";
import { fetchDeleteNote } from "../api/Notes";
import { queryClient } from "../api/queryClient";
import { useQueryNotesList } from "./useQueryNotesList";
import { useQueryBoardsList } from "./useQueryBoardsList";

export const useMutateDeleteCard = (id: string, variant: string) => {
  const queryBoardsList = useQueryBoardsList();
  const queryNotesList = useQueryNotesList();

  return useMutation(
    {
      mutationFn: () =>
        variant === "note" ? fetchDeleteNote(id) : fetchDeleteBoard(id),
      onSuccess: () =>
        variant === "note"
          ? queryNotesList.refetch()
          : queryBoardsList.refetch(),
    },
    queryClient
  );
};
