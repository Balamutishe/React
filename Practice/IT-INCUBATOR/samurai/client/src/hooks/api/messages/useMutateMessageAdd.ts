import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createMessage } from "../../../api/messages/messages.ts";

export const useMutateMessageAdd = () => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: createMessage,
      onSuccess: async (data) =>
        await queryClient.invalidateQueries({
          queryKey: ["messages", data.chatId],
        }),
    },
    queryClient
  );
};
