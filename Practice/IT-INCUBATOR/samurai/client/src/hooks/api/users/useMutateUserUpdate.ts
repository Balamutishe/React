import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { TUser } from "../../../api/users/types.ts";
import { updateUser } from "../../../api/users/users.ts";
import {
		setProfile,
		setSubscriptionIdUpdate,
} from "../../../redux/ProfileSlice.ts";

export const useMutateUserUpdate = (
	updateUserData: Partial<TUser>) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		const { mutate } = useMutation({
				mutationFn: () => updateUser(updateUserData),
				onSuccess: async () => {
						await queryClient.invalidateQueries({ queryKey: ["users", "me"] });
						dispatch(setProfile(updateUserData));
						dispatch(setSubscriptionIdUpdate(""));
				},
		}, queryClient);
		
		return mutate;
};