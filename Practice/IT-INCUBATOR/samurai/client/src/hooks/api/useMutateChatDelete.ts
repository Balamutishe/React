import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { fetchDeleteChat } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";
import { setDeleteChatId } from "../../redux/DialogsSlice.ts";
import { TChatsList } from "../../api/chats/types.ts";

export const useMutateChatDelete = (refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>) => {
	const dispatch = useDispatch()
	const deleteChatId = useSelector(
		(state: RootState) => state.dialogsData.chatsData.deleteChatId)

	const { mutate } = useMutation({
		mutationFn: () => fetchDeleteChat(deleteChatId),
		onSuccess: async () => {
			await refetch()
			dispatch(setDeleteChatId(""))
		}
	}, queryClient)

	return mutate
}