import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/users/users.ts";
import { queryClient } from "../../api/queryClient.ts";

export const useQueryGetAllUsers = () => {
	const { data, status, refetch } = useQuery({
		queryFn: () => getAllUsers(),
		queryKey: ["users", "all"]
	}, queryClient)

	const users = data ? data : []

	return {
		users,
		status,
		refetch
	}
}