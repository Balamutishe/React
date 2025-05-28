import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../../api/users/users.ts";

export const useMutateUserLogout = () => {
		const queryClient = useQueryClient();
		return useMutation({
				mutationFn: () => logout(),
				onSuccess: async () => {
						await queryClient.invalidateQueries({ queryKey: ["users", "me"] });
				},
				onError: (error) => {
						console.log(error);
				},
		}, queryClient);
};