import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userRegister } from "../../../api/users/users.ts";

export const useMutateUserRegister = () => {
		const queryClient = useQueryClient();
		return useMutation({
				mutationFn: userRegister,
		}, queryClient);
};