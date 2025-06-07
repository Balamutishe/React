import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { createChat } from "../../../api/chats/chats.ts";

export const useMutateChatAdd = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(
    {
      mutationFn: createChat,
      onSuccess: async (data) => {
        await queryClient.invalidateQueries({ queryKey: ["chats"] });
        navigate(`/dialogs/${data._id}`);
      },
    },
    queryClient
  );
};
