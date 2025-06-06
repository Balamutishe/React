import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getAllMessages } from "../../../api/messages/messages.ts";

export const useQueryGetAllMessages = () => {
  const queryClient = useQueryClient();
  const { chatId, page } = useParams();

  return useQuery(
    {
      queryFn: () => getAllMessages(chatId || "", page || "1"),
      queryKey: ["messages", chatId],
      enabled: !!chatId,
    },
    queryClient
  );
};
