import { fetchGetBoardsList } from "../api/Boards";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";

export const useQueryBoardsList = () =>
  useQuery(
    {
      queryFn: () => fetchGetBoardsList(),
      queryKey: ["boardsList"],
    },
    queryClient
  );
