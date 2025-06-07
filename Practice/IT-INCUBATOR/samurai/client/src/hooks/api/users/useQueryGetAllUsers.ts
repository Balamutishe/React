import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/users/users.ts";
import { useSearchParams } from "react-router-dom";

export const useQueryGetAllUsers = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const activePage = searchParams.get("page") || 1;

  return useQuery(
    {
      queryFn: () => getAllUsers(Number(activePage)),
      queryKey: ["users", activePage],
    },
    queryClient
  );
};
