import { useMutation } from "@tanstack/react-query";
import { fetchDeleteBoard } from "../api/Boards";
import { fetchDeleteNote } from "../api/Notes";
import { queryClient } from "../api/queryClient";

export const useMutateDeleteCard = (id: string, variant: string) =>
  useMutation(
    {
      mutationFn: () =>
        variant === "note" ? fetchDeleteNote(id) : fetchDeleteBoard(id),
    },
    queryClient
  );
