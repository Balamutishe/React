import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createChat } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";
import { TChatsList } from "../../api/chats/types.ts";
import { setChatText } from "../../redux/DialogsSlice.ts";

export const useMutateChatAdd = (chatText: string, userId: string,
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>) => {
	const dispatch = useDispatch();

	const { mutate } = useMutation({
		mutationFn: () => createChat(chatText, userId),
		onSuccess: async () => {
			await refetch()
			dispatch(setChatText(""))
		}
	}, queryClient)

	return mutate
}