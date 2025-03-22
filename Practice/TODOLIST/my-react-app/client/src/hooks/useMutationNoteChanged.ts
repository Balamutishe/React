import { useMutation } from "@tanstack/react-query";
import { QueryObserverResult } from "@tanstack/react-query";

import { changeNote } from "../api/Notes";
import { queryClient } from "../api/queryClient";
import { TNote } from "../api/Notes";

export const useMutationNoteChanged = (
  id: number,
  title: string,
  description: string,
  refetch: () => Promise<QueryObserverResult<TNote, Error>>
) => {
  return useMutation(
    {
      mutationFn: () => changeNote(id, title, description),
      onSuccess() {
        refetch();
      },
    },
    queryClient
  );
};
