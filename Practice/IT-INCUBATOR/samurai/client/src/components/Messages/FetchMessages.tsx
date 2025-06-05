import {
  useMutateMessageAdd,
  useMutateMessageDelete,
  useQueryGetAllMessages,
} from "../../hooks/api";
import { RenderElement } from "../RenderElement/RenderElement.tsx";
import { Messages } from "./Messages.tsx";

export const FetchMessages = () => {
  const queryMessages = useQueryGetAllMessages();
  const deleteMessage = useMutateMessageDelete();
  const createMessage = useMutateMessageAdd();

  return (
    <RenderElement
      Element={
        <Messages
          createMessage={createMessage}
          deleteMessage={deleteMessage}
          messages={queryMessages.data ? queryMessages.data : []}
        />
      }
      queryStatus={queryMessages.status}
      refetchFn={queryMessages.refetch}
    />
  );
};
