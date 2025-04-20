import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/users/users.ts";

export const useQueryGetAllUsers = () => {
		const queryClient = useQueryClient();
		const { data, status, refetch } = useQuery({
				queryFn: () => getAllUsers(),
				queryKey: ["users", "all"],
		}, queryClient);
		
		const users = data ? data : [];
		
		return {
				users,
				status,
				refetch,
		};
};