import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { fetchNote } from "../api/Notes";

export const useQueryNote = (id: string) => {
  return useQuery(
    {
      queryFn: () => fetchNote(id),
      queryKey: ["note"],
    },
    queryClient
  );
};
