import { fetchGetNotesList } from "../api/Notes";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";

export const useQueryNotesList = () =>
  useQuery(
    {
      queryFn: () => fetchGetNotesList(),
      queryKey: ["notesList"],
    },
    queryClient
  );
