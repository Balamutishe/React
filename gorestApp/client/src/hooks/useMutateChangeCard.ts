import { useMutation } from "@tanstack/react-query";
import { fetchChangeBoard } from "../api/Boards";
import { fetchChangeNote } from "../api/Notes";
import { useQueryNotesList } from "./useQueryNotesList";
import { useQueryBoardsList } from "./useQueryBoardsList";
import { queryClient } from "../api/queryClient";

export const useMutateChangeCard = (
  id: string,
  variant: string,
  text: string
) => {
  const queryBoardsList = useQueryBoardsList();
  const queryNotesList = useQueryNotesList();

  return useMutation(
    {
      mutationFn: () =>
        variant === "note"
          ? fetchChangeNote(id, text)
          : fetchChangeBoard(id, text),
      onSuccess: () =>
        variant === "note"
          ? queryNotesList.refetch()
          : queryBoardsList.refetch(),
    },
    queryClient
  );
};
