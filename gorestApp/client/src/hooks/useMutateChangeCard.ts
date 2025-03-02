import { useMutation } from "@tanstack/react-query";
import { fetchChangeBoard } from "../api/Boards";
import { fetchChangeNote } from "../api/Notes";
import { queryClient } from "../api/queryClient";

export const useMutateChangeCard = (
  id: string,
  variant: string,
  text: string
) =>
  useMutation(
    {
      mutationFn: () =>
        variant === "note"
          ? fetchChangeNote(id, text)
          : fetchChangeBoard(id, text),
    },
    queryClient
  );
