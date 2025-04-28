import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { fetchDeleteMessage } from "../../../api/messages/messages.ts";
import { setDeleteMessageId } from "../../../redux/DialogsSlice.ts";
import { RootState } from "../../../redux";

export const useMutateMessageDelete = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const deleteMessageId = useSelector(
			(state: RootState) => state.dialogsData.messagesData.deleteMessageId);
		
		const { mutate } = useMutation({
				mutationFn: () => fetchDeleteMessage(deleteMessageId),
				onSuccess: async () => {
						dispatch(setDeleteMessageId(""));
						await queryClient.invalidateQueries({ queryKey: ["messages"] });
				},
		}, queryClient);
		
		return mutate;
};