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

  return (
    <RenderElement
      Element={
        <Messages
          createMessage={createMessage}
          deleteMessage={deleteMessage}
          messagesList={data?.messagesList ? data.messagesList : []}
          pageCount={data?.pageCount ? data.pageCount : 1}
        />
      }
      queryStatus={status}
      refetchFn={refetch}
    />
  );
};
