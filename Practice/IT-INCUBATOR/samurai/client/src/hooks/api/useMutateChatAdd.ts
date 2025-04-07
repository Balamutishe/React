import {
	useMutation
} from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { createChat } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";

export const useMutateChatAdd = () => {
	const dispatch = useDispatch()
	const userId = useSelector((state: RootState) => state.profileData.user._id)
	const chatText = useSelector((state: RootState) => state.dialogsData.chatText)

	const { mutate } = useMutation({
		mutationFn: () => createChat(chatText, userId),
		onSuccess: (data) => {
			dispatch({
				type: 'dialogsData/addChat',
				payload: data
			})
		}
	}, queryClient)

	return mutate
}