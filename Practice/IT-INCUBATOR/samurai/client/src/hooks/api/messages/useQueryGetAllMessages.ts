import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router";

import { getAllMessages } from "../../../api/messages/messages.ts";

export const useQueryGetAllMessages = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const { chatId } = useParams();

  return useQuery(
    {
      queryFn: () => getAllMessages(chatId || "", page),
      queryKey: ["messages", chatId, page],
      enabled: !!chatId,
    },
    queryClient
  );
};
