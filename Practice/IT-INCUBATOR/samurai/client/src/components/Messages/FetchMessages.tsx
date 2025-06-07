import { useParams } from "react-router-dom";
import {
  useMutateMessageAdd,
  useMutateMessageDelete,
  useQueryGetAllMessages,
} from "../../hooks/api";
import { RenderElement } from "../RenderElement/RenderElement.tsx";
import { Messages } from "./Messages.tsx";

export const FetchMessages = () => {
  const { status, data, refetch } = useQueryGetAllMessages();
  const deleteMessage = useMutateMessageDelete();
  const createMessage = useMutateMessageAdd();
  const activeChatId = useParams().chatId || "";

  return (
    <RenderElement
      Element={
        <Messages
          createMessage={createMessage}
          deleteMessage={deleteMessage}
          messagesList={data?.messagesList ? data.messagesList : []}
          pageCount={data?.pageCount ? data.pageCount : 1}
          activeChatId={activeChatId}
        />
      }
      queryStatus={status}
      refetchFn={refetch}
    />
  );
};
