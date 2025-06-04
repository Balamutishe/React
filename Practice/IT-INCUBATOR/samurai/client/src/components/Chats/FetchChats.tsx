import {
		useMutateChatAdd,
		useMutateChatDelete,
		useQueryGetAllChats,
} from "../../hooks/api";
import { RenderElement } from "../RenderElement/RenderElement.tsx";
import { Chats } from "./Chats.tsx";

export const FetchChats = () => {
		const queryChats = useQueryGetAllChats();
		const createChat = useMutateChatAdd();
		const deleteChat = useMutateChatDelete();
		
		return <RenderElement
			Element={ <Chats
				chats={ queryChats.data ? queryChats.data : [] }
				createChat={ createChat }
				deleteChat={ deleteChat }
			/> }
			queryStatus={ queryChats.status }
			refetchFn={ queryChats.refetch }
		/>;
};