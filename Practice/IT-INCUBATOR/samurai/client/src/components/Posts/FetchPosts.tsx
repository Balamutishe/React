import {
  useMutatePostAdd,
  useMutatePostDelete,
  useQueryGetAllPosts,
} from "../../hooks/api";
import { RenderElement } from "../RenderElement/RenderElement.tsx";
import { Posts } from "./Posts.tsx";

export const FetchPosts = () => {
  const { data, status, refetch } = useQueryGetAllPosts();
  const createPost = useMutatePostAdd();
  const deletePost = useMutatePostDelete();

  return (
    <RenderElement
      Element={
        <Posts
          createPost={createPost}
          deletePost={deletePost}
          posts={data ? data : []}
        />
      }
      queryStatus={status}
      refetchFn={refetch}
    />
  );
};
