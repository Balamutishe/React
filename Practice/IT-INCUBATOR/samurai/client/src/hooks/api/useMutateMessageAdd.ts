import { useDispatch, useSelector } from "react-redux";
import {
	useMutation
} from "@tanstack/react-query";

import { queryClient } from "../../api/queryClient.ts";
import { createMessage } from "../../api/messages/messages.ts";
import { RootState } from "../../redux";
import userImg from "../../assets/149071.png";


export const useMutateMessageAdd = () => {
	const dispatch = useDispatch();
	const userId = useSelector((state: RootState) => state.profileData.user._id)
	const messageText = useSelector(
		(state: RootState) => state.dialogsData.messageText)
	const chatId = useSelector(
		(state: RootState) => state.dialogsData.activeChatId)

	const { mutate } = useMutation({
		mutationFn: () => createMessage(messageText, userImg, chatId, userId),
		onSuccess: async (data) => {
			dispatch({ type: 'dialogsData/addMessage', payload: data })
			dispatch({ type: 'dialogsData/setMessageText', payload: '' })
		}
	}, queryClient)

	return mutate
}