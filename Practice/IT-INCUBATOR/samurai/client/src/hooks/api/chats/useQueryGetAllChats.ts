import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { getAllChats } from "../../../api/chats/chats.ts";
import { setChats } from "../../../redux/ChatsSlice.ts";

export const useQueryGetAllChats = () => {
		const queryClient = useQueryClient();
		const navigate = useNavigate();
		const dispatch = useDispatch();
		
		return useQuery({
				queryFn: () => getAllChats()
				.then((data) => {
						dispatch(setChats(data));
						navigate(`/dialogs/${ data[0]._id }`);
						return data;
				}),
				queryKey: ["chats", "all"],
		}, queryClient);
};