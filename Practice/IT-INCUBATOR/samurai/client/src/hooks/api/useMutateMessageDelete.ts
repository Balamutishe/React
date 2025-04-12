import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";

import { queryClient } from "../../api/queryClient.ts";
import {
	fetchDeleteMessage
} from "../../api/messages/messages.ts";
import { TMessagesList } from "../../api/messages/types.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import {
	setDeleteMessageId
} from "../../redux/DialogsSlice.ts";

export const useMutateMessageDelete = (
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>) => {
	const dispatch = useDispatch()
	const deleteMessageId = useSelector(
		(state: RootState) => state.dialogsData.messagesData.deleteMessageId)

	const { mutate } = useMutation({
		mutationFn: () => fetchDeleteMessage(deleteMessageId),
		onSuccess: async () => {
			dispatch(setDeleteMessageId(""))
			await refetch();
		}
	}, queryClient)

	return mutate
}