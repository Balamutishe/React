import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../../api/users/users.ts";
import { setUsers } from "../../../redux/UsersSlice.ts";

export const useQueryGetAllUsers = (activePage: number) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useQuery({
				queryFn: () => getAllUsers(activePage).then((data) => {
						dispatch(setUsers(data));
						return data;
				}),
				queryKey: ["users", "all"],
		}, queryClient);
};