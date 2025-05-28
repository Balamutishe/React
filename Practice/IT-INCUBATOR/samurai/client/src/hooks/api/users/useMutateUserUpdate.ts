import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { TUser } from "../../../api/users/types.ts";
import { updateUser } from "../../../api/users/users.ts";
import { profileUpdate } from "../../../redux/ProfileSlice.ts";

export const useMutateUserUpdate = (
	updateProfileData: Partial<TUser>) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: () => updateUser(updateProfileData),
				onSuccess: () => dispatch(
					profileUpdate(updateProfileData)),
		}, queryClient);
};