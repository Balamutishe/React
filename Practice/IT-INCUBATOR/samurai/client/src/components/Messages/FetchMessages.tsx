import { useParams } from "react-router";
import {
		useMutateMessageAdd,
		useMutateMessageDelete,
		useQueryGetAllMessages,
} from "../../hooks/api";
import { RenderElement } from "../RenderElement/RenderElement.tsx";
import { Messages } from "./Messages.tsx";


export const FetchMessages = () => {
		const { chatId, page } = useParams();
		const queryMessages = useQueryGetAllMessages(chatId, page || "1");
		const deleteMessage = useMutateMessageDelete(chatId);
		const createMessage = useMutateMessageAdd();
		
		return <RenderElement
			Element={ <Messages
				chatId={ chatId }
				createMessage={ createMessage }
				deleteMessage={ deleteMessage }
				messages={ queryMessages.data }
			/> }
			queryStatus={ queryMessages.status }
			refetchFn={ queryMessages.refetch }
		/>;
};