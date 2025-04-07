import {
	useMutation
} from "@tanstack/react-query";
import { deleteChat } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";
import { useQueryGetAllPosts } from "./useQueryGetAllPosts.ts";
import { useDispatch } from "react-redux";

type TUseMutateChatDelete = {
	chatId: string
}

export const useMutateChatDelete = ({
	chatId
}: TUseMutateChatDelete) => {
	const { refetch } = useQueryGetAllPosts()
	const dispatch = useDispatch()

	const { mutate } = useMutation({
		mutationFn: () => deleteChat(chatId),
		onSuccess: async () => {
			await refetch()
			dispatch({ type: 'dialogsData/deleteChat', payload: chatId })
		}
	}, queryClient)

	return mutate
}