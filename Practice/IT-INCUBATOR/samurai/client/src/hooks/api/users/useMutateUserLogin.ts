import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../../api/users/users.ts";

export const useMutateUserLogin = (loginUserData: {
		username: string,
		password: string
}) => {
		const queryClient = useQueryClient();
		return useMutation({
				mutationFn: () => login(loginUserData),
				onSuccess: async () => {
						await queryClient.invalidateQueries({ queryKey: ["users", "me"] });
				},
		}, queryClient);
};