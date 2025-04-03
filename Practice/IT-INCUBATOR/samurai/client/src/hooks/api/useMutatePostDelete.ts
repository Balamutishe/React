import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { deletePost } from "../../api/posts/posts.ts";
import { queryClient } from "../../api/queryClient.ts";
import { TPostsList } from "../../api/posts/types.ts";

type TUseMutatePostDelete = {
	postId: string;
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>
}

export const useMutatePostDelete = ({
	postId, refetch
}: TUseMutatePostDelete) => {
	const { mutate } = useMutation({
		mutationFn: () => deletePost(postId),
		onSuccess: () => refetch()
	}, queryClient)

	return mutate
}