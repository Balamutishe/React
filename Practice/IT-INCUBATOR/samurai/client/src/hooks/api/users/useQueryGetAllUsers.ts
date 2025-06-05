import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/users/users.ts";
import { useParams } from "react-router-dom";

export const useQueryGetAllUsers = () => {
  const queryClient = useQueryClient();
  const activePage = useParams().page || 1;

  return useQuery(
    {
      queryFn: () => getAllUsers(Number(activePage)),
      queryKey: ["users", activePage],
    },
    queryClient
  );
};
