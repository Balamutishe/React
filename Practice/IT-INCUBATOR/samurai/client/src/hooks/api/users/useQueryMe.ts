import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserMe } from "../../../api/users/users.ts";

export const useQueryMe = () => {
		const queryClient = useQueryClient();
		
		return useQuery({
				queryFn: async () => await getUserMe(),
				queryKey: ["users", "me"],
				retry: false,
		}, queryClient);
};