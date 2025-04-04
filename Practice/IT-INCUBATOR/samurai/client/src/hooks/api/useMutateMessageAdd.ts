import { SetStateAction } from "react";
import { useSelector } from "react-redux";
import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";

import { queryClient } from "../../api/queryClient.ts";
import { createMessage } from "../../api/messages/messages.ts";
import { TMessagesList } from "../../api/messages/types.ts";
import { RootState } from "../../redux";
import userImg from "../../assets/149071.png";

type TUseMutateMessageAddProps = {
	messageText: string
	setMessageText: (value: SetStateAction<string>) => void
	chatId: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>
}

export const useMutateMessageAdd = ({
	messageText, setMessageText, chatId, refetch
}: TUseMutateMessageAddProps) => {
	const userId = useSelector((state: RootState) => state.userData._id)

	const { mutate } = useMutation({
		mutationFn: () => createMessage(messageText, userImg, chatId, userId),
		onSuccess: async () => {
			await refetch()
			setMessageText('')
		}
	}, queryClient)

	return mutate
}