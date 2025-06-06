import {
  useMutateChatAdd,
  useMutateChatDelete,
  useQueryGetAllChats,
} from "../../hooks/api";
import { RenderElement } from "../RenderElement/RenderElement.tsx";
import { Chats } from "./Chats.tsx";

export const FetchChats = () => {
  const { data, status, refetch } = useQueryGetAllChats();
  const createChat = useMutateChatAdd();
  const deleteChat = useMutateChatDelete();

  return (
    <RenderElement
      Element={
        <Chats
          chats={data ? data : []}
          createChat={createChat}
          deleteChat={deleteChat}
        />
      }
      queryStatus={status}
      refetchFn={refetch}
    />
  );
};
