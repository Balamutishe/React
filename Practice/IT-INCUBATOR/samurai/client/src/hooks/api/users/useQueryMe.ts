import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getUserMe } from "../../../api/users/users.ts";
import { setProfile } from "../../../redux/ProfileSlice.ts";

export const useQueryMe = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const navigate = useNavigate();
		
		return useQuery({
				queryFn: async () => await getUserMe().then((data) => {
						dispatch(setProfile(data));
						navigate("/");
						return data;
				}),
				queryKey: ["users", "me"],
				retry: false,
		}, queryClient);
};