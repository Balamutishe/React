import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userRegister } from "../../../api/users/users.ts";

export const useMutateUserRegister = (newUserData: {
		username: string,
		password: string
}) => {
		const queryClient = useQueryClient();
		return useMutation({
				mutationFn: () => userRegister(newUserData),
		}, queryClient);
};