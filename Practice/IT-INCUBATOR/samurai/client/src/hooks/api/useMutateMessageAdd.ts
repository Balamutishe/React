import { useDispatch, useSelector } from "react-redux";
import {
	useMutation
} from "@tanstack/react-query";

import { queryClient } from "../../api/queryClient.ts";
import { createMessage } from "../../api/messages/messages.ts";
import { RootState } from "../../redux";
import { useQueryGetAllMessages } from "./useQueryGetAllMessages.ts";
import userImg from "../../assets/149071.png";

type TUseMutateMessageAddProps = {
	messageText: string
}

export const useMutateMessageAdd = ({
	messageText
}: TUseMutateMessageAddProps) => {
	const dispatch = useDispatch();
	const userId = useSelector((state: RootState) => state.profileData.user._id)
	const chatId = useSelector(
		(state: RootState) => state.dialogsData.activeChatId)
	const { refetch } = useQueryGetAllMessages()

	const { mutate } = useMutation({
		mutationFn: () => createMessage(messageText, userImg, chatId, userId),
		onSuccess: async (data) => {
			await refetch()
			dispatch({ type: 'dialogsData/addMessage', payload: data })
			dispatch({ type: 'dialogsData/setMessageText', payload: '' })
		}
	}, queryClient)

	return mutate
}