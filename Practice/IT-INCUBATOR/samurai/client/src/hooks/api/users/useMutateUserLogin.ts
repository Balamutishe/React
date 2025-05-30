import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../../api/users/users.ts";

export const useMutateUserLogin = () => {
		const queryClient = useQueryClient();
		return useMutation({
				mutationFn: login,
				onSuccess: async () => {
						await queryClient.invalidateQueries({ queryKey: ["users", "me"] });
				},
		}, queryClient);
};