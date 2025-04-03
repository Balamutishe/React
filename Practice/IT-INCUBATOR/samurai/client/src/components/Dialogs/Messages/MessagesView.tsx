import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";

import { Messages } from "./Messages.tsx";
import { getAllMessages } from "../../../api/messages/messages.ts";
import { queryClient } from "../../../api/queryClient.ts";

type TMessagesViewProps = {
	chatId: string
	userId: string
}

export const MessagesView: FC<TMessagesViewProps> = ({ chatId, userId }) => {
	const { data, status, refetch } = useQuery({
		queryFn: () => getAllMessages(chatId),
		queryKey: ["messages", "all"]
	}, queryClient)

	useEffect(() => {
		refetch()
	}, [chatId, refetch])

	switch (status) {
		case "success":
			return (
				<Messages
					messages={ data } chatId={ chatId } userId={ userId }
					refetch={ refetch }
				/>
			)
		case "error":
			return (
				<div>
					<p>
						Произошла ошибка получения данных
					</p>
					<button onClick={ () => refetch() }>
						Повторить запрос
					</button>
				</div>
			)
	}
}