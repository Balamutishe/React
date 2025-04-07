import {
	useMutation
} from "@tanstack/react-query";

import { queryClient } from "../../api/queryClient.ts";
import { deleteMessage } from "../../api/messages/messages.ts";
import { useDispatch } from "react-redux";

type TUseMutateMessageDeleteProps = {
	messageId: string;
}

export const useMutateMessageDelete = ({
	messageId
}: TUseMutateMessageDeleteProps) => {
	const dispatch = useDispatch()

	const { mutate } = useMutation({
		mutationFn: () => deleteMessage(messageId),
		onSuccess: async () => {
			dispatch({ type: "dialogsData/deleteMessage", payload: messageId })
		}
	}, queryClient)

	return mutate
}