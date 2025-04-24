import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { login } from "../../../api/users/users.ts";
import { setProfile } from "../../../redux/ProfileSlice.ts";

export const useMutateUserLogin = (loginUserData: {
		username: string,
		password: string
}) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		const { mutate } = useMutation({
				mutationFn: async () => await login(loginUserData),
				onSuccess: async (data) => {
						dispatch(setProfile(data));
						await queryClient.invalidateQueries({ queryKey: ["users", "me"] });
				},
				onError: (error) => {
						console.log(error);
				},
		}, queryClient);
		
		return mutate;
};