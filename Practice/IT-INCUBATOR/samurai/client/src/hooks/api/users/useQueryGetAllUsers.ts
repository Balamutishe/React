import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/users/users.ts";
import { useParams } from "react-router";

export const useQueryGetAllUsers = () => {
		const queryClient = useQueryClient();
		const page = Number(useParams().page) || 1;
		
		return useQuery({
				queryFn: () => getAllUsers(page),
				queryKey: ["users", "all"],
		}, queryClient);
};