import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";

import { queryClient } from "../../api/queryClient.ts";
import { createMessage } from "../../api/messages/messages.ts";
import { TMessagesList } from "../../api/messages/types.ts";
import userImg from "../../assets/149071.png";


export const useMutateMessageAdd = (messageText: string, chatId: string,
	userId: string,
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>) => {
	const { mutate } = useMutation({
		mutationFn: () => createMessage(messageText, userImg, chatId, userId),
		onSuccess: async () => {
			await refetch()
		}
	}, queryClient)

	return mutate
}