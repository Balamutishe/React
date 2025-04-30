import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllChats } from "../../../api/chats/chats.ts";
import { useDispatch, useSelector } from "react-redux";
import { setActiveChatId, setChats } from "../../../redux/DialogsSlice.ts";
import { RootState } from "../../../redux";

export const useQueryGetAllChats = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const activeChatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		
		return useQuery({
				queryFn: async () => await getAllChats()
				.then((data) => {
						dispatch(setChats(data));
						
						if (activeChatId === "") {
								dispatch(setActiveChatId(data[0]._id));
						}
						
						return data;
				}),
				queryKey: ["chats", "all"],
		}, queryClient);
};