import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { getAllChats } from "../../../api/chats/chats.ts";
import { setChats } from "../../../redux/ChatsSlice.ts";

export const useQueryGetAllChats = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const navigate = useNavigate();
		
		return useQuery({
				queryFn: async () => await getAllChats()
				.then((data) => {
						dispatch(setChats(data));
						navigate(`/dialogs/${ data[0]._id }`);
						return data;
				}),
				queryKey: ["chats", "all"],
		}, queryClient);
};