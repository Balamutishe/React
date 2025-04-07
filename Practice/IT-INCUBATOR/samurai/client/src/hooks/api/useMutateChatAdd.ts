import {
	useMutation
} from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { useQueryGetAllChats } from "./useQueryGetAllChats.ts";
import { createChat } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";

type TUseMutateAddChatProps = {
	chatText: string
}

export const useMutateChatAdd = ({
	chatText
}: TUseMutateAddChatProps) => {
	const { refetch } = useQueryGetAllChats()
	const dispatch = useDispatch()
	const userId = useSelector((state: RootState) => state.profileData.user._id)

	const { mutate } = useMutation({
		mutationFn: () => createChat(chatText, userId),
		onSuccess: async (data) => {
			await refetch()
			dispatch({
				type: 'dialogsData/addChat',
				payload: data
			})
			dispatch({ type: 'dialogsData/setChatText', payload: '' })
		}
	}, queryClient)

	return mutate
}