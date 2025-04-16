import { useQuery } from "@tanstack/react-query";

import { getUserById } from "../../api/users/users.ts";
import { queryClient } from "../../api/queryClient.ts";

export const useQueryUserGet = (userId: string) => {
	const { data, status, refetch } = useQuery({
		queryFn: async () => await getUserById(userId),
		queryKey: ["user", "me"]
	}, queryClient)

	const user = data ? data : {}

	return {
		user,
		status,
		refetch
	}
}