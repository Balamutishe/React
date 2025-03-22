import { useMutation } from "@tanstack/react-query";
import { deleteNote } from "../api/Notes";
import { queryClient } from "../api/queryClient";

export const useMutationNoteDelete = (id: number) => {
  return useMutation(
    {
      mutationFn: () => deleteNote(id),
    },
    queryClient
  );
};
