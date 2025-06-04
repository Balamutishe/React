import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { getAllChats } from "../../../api/chats/chats.ts";

export const useQueryGetAllChats = () => {
		const queryClient = useQueryClient();
		const navigate = useNavigate();
		
		return useQuery({
				queryFn: () => getAllChats()
				.then((data) => {
						navigate(`/dialogs/${ data[0]._id }`);
						return data;
				}),
				queryKey: ["chats"],
		}, queryClient);
};