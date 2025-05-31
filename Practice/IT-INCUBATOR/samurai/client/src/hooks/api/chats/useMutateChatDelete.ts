import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { fetchDeleteChat } from "../../../api/chats/chats.ts";
import { deleteChat } from "../../../redux/ChatsSlice.ts";

export const useMutateChatDelete = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: fetchDeleteChat,
				onSuccess: (data) => dispatch(deleteChat(data)),
		}, queryClient);
};