import {
  useMutatePostAdd,
  useMutatePostDelete,
  useQueryGetAllPosts,
} from "../../hooks/api";
import { RenderElement } from "../RenderElement/RenderElement.tsx";
import { Posts } from "./Posts.tsx";

export const FetchPosts = () => {
  const queryPosts = useQueryGetAllPosts();
  const createPost = useMutatePostAdd();
  const deletePost = useMutatePostDelete();

  return (
    <RenderElement
      Element={
        <Posts
          createPost={createPost}
          deletePost={deletePost}
          posts={queryPosts.data ? queryPosts.data : []}
        />
      }
      queryStatus={queryPosts.status}
      refetchFn={queryPosts.refetch}
    />
  );
};
