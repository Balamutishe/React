import { FC, useEffect } from "react";

import { Messages } from "./Messages.tsx";
import {
	useQueryGetAllMessages
} from "../../../hooks/api";

type TMessagesViewProps = {
	chatId: string
	userId: string
}

export const MessagesView: FC<TMessagesViewProps> = ({ chatId, userId }) => {
	const { data, status, refetch } = useQueryGetAllMessages({ chatId })

	useEffect(() => {
		refetch()
	}, [chatId, refetch])

	switch (status) {
		case "success":
			return (
				<Messages
					messages={ data ? data : [] } chatId={ chatId } userId={ userId }
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