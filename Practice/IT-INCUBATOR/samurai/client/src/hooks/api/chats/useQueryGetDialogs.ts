import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getAllChats } from "../../../api/chats/chats.ts";
import { getAllMessages } from "../../../api/messages/messages.ts";

export const useQueryGetDialogs = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const { page } = useParams();
		
		const { data: chats } = useQuery({
				queryFn: () => getAllChats()
				.then((data) => {
						// dispatch(setChats(data));
						// navigate(`/dialogs/${ data[0]._id }`);
						return data;
				}),
				queryKey: ["chats", "all"],
		}, queryClient);
		
		const queryMessages = useQueries({
				queries: chats ? chats.map((chat) => {
						return {
								queryKey: ["messages", chat._id],
								queryFn: () => getAllMessages(chat._id, page || "1"),
						};
				}) : [],
		});
		
		return queryMessages;
};