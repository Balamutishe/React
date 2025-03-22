import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { fetchNotesList } from "../api/Notes";

export const useQueryList = () => {
  return useQuery(
    {
      queryFn: () => fetchNotesList(),
      queryKey: ["notesList"],
    },
    queryClient
  );
};
