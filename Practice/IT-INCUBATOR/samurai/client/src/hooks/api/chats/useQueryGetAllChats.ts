import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { getAllChats } from "../../../api/chats/chats.ts";
import { setChats } from "../../../redux/ChatsSlice.ts";

export const useQueryGetAllChats = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useQuery({
				queryFn: async () => await getAllChats()
				.then((data) => {
						dispatch(setChats(data));
						return data;
				}),
				queryKey: ["chats", "all"],
		}, queryClient);
};