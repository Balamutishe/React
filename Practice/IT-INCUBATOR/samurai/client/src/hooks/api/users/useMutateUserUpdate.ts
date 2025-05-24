import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { TUser } from "../../../api/users/types.ts";
import { updateUser } from "../../../api/users/users.ts";
import { RootState } from "../../../redux";
import { setProfile } from "../../../redux/ProfileSlice.ts";

export const useMutateUserUpdate = (
	updateUserData: Partial<TUser>) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const userData = useSelector((state: RootState) => state.profileData.user);
		
		return useMutation({
				mutationFn: () => updateUser({ ...userData, ...updateUserData }),
				onSuccess: () => {
						dispatch(setProfile({ ...userData, ...updateUserData }));
				},
		}, queryClient);
};