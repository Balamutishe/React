import { useMutation } from "@tanstack/react-query";
import { QueryObserverResult } from "@tanstack/react-query";

import { createNote } from "../api/Notes";
import { queryClient } from "../api/queryClient";
import { TNote } from "../api/Notes";

export const useMutationNoteCreated = (
  title: string,
  description: string,
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>
) => {
  return useMutation(
    {
      mutationFn: () => createNote(title, description),
      onSuccess() {
        refetch();
      },
    },
    queryClient
  );
};
