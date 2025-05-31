import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createMessage } from "../../../api/messages/messages.ts";
import { addMessage } from "../../../redux/MessagesSlice.ts";

export const useMutateMessageAdd = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: createMessage,
				onSuccess: (data) => dispatch(addMessage(data)),
		}, queryClient);
		
};