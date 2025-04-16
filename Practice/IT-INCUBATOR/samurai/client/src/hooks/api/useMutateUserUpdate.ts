import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { queryClient } from "../../api/queryClient.ts";
import { TUser, TUsersList } from "../../api/users/types.ts";
import { updateUser } from "../../api/users/users.ts";
import {
	setProfile,
	setSubscriptionIdUpdate
} from "../../redux/ProfileSlice.ts";

export const useMutateUserUpdate = (
	userId: string,
	updateUserData: Partial<TUser>,
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TUsersList, Error>>) => {
	const dispatch = useDispatch();

	const { mutate } = useMutation({
		mutationFn: () => updateUser(userId, updateUserData),
		onSuccess: async () => {
			await refetch()
			dispatch(setProfile(updateUserData))
			dispatch(setSubscriptionIdUpdate(''))
		}
	}, queryClient)

	return mutate
}