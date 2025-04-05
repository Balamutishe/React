import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";

import { queryClient } from "../../api/queryClient.ts";
import { TMessagesList } from "../../api/messages/types.ts";
import { deleteMessage } from "../../api/messages/messages.ts";
import { useQueryGetAllPosts } from "./useQueryGetAllPosts.ts";

type TUseMutateMessageDeleteProps = {
	messageId: string;
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>
}

export const useMutateMessageDelete = ({
	messageId
}: TUseMutateMessageDeleteProps) => {
	const { refetch } = useQueryGetAllPosts()

	const { mutate } = useMutation({
		mutationFn: () => deleteMessage(messageId),
		onSuccess: () => refetch()
	}, queryClient)

	return mutate
}