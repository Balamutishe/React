import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchDeleteChat } from "../../../api/chats/chats.ts";

export const useMutateChatDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: fetchDeleteChat,
      onSuccess: async () =>
        await queryClient.invalidateQueries({ queryKey: ["chats"] }),
    },
    queryClient
  );
};
