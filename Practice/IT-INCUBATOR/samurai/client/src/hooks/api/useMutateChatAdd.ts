import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { SetStateAction } from 'react'

import { createChat } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";
import { TChatsList } from "../../api/chats/types.ts";

type TUseMutateAddChatProps = {
	chatText: string
	setChatText: (value: SetStateAction<string>) => void
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>
}

export const useMutateChatAdd = ({
	chatText, setChatText, refetch
}: TUseMutateAddChatProps) => {
	const userId = useSelector((state: RootState) => state.userData._id)

	const { mutate } = useMutation({
		mutationFn: () => createChat(chatText, userId),
		onSuccess: async () => {
			await refetch()
			setChatText('')
		}
	}, queryClient)

	return mutate
}