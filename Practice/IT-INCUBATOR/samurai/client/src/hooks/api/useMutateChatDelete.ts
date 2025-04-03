import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { deleteChat } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";
import { TChatsList } from "../../api/chats/types.ts";

type TUseMutateChatDelete = {
	chatId: string;
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>
}

export const useMutateChatDelete = ({
	chatId, refetch
}: TUseMutateChatDelete) => {
	const { mutate } = useMutation({
		mutationFn: () => deleteChat(chatId),
		onSuccess: () => refetch()
	}, queryClient)

	return mutate
}