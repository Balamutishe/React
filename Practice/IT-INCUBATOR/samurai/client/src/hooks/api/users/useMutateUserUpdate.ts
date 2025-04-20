import { QueryObserverResult, RefetchOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { TUser, TUsersList } from "../../../api/users/types.ts";
import { updateUser } from "../../../api/users/users.ts";
import { setProfile, setSubscriptionIdUpdate } from "../../../redux/ProfileSlice.ts";

export const useMutateUserUpdate = (
	updateUserData: Partial<TUser>,
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TUsersList, Error>>) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		const { mutate } = useMutation({
				mutationFn: () => updateUser(updateUserData),
				onSuccess: async () => {
						await refetch();
						dispatch(setProfile(updateUserData));
						dispatch(setSubscriptionIdUpdate(""));
				},
		}, queryClient);
		
		return mutate;
};