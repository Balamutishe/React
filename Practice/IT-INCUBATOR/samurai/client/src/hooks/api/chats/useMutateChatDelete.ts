import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { fetchDeleteChat } from "../../../api/chats/chats.ts";
import { RootState } from "../../../redux";
import { setDeleteChatId } from "../../../redux/DialogsSlice.ts";

export const useMutateChatDelete = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const deleteChatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.deleteChatId);
		
		const { mutate } = useMutation({
				mutationFn: () => fetchDeleteChat(deleteChatId),
				onSuccess: async () => {
						dispatch(setDeleteChatId(""));
						await queryClient.invalidateQueries({ queryKey: ["chats", "all"] });
						await queryClient.invalidateQueries({ queryKey: ["messages", "all"] });
				},
		}, queryClient);
		
		return mutate;
};