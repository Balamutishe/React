import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { TPost, TPostsList } from "../../api/posts/types.ts";
import AddPostForm from "../AddItemForm/AddItemForm.tsx";
import { List } from "../List/List.tsx";
import { PostItem } from "./PostItem.tsx";
import c from "./Posts.module.css";

type TPostsProps = {
  posts: TPostsList;
  createPost: UseMutationResult<
    TPost,
    Error,
    {
      formText: string;
    },
    unknown
  >;
  deletePost: UseMutationResult<string, Error, string, unknown>;
};

export const Posts: FC<TPostsProps> = ({ posts, createPost, deletePost }) => {
  return (
    <div>
      <h2 className={c.title}>Posts</h2>
      <AddPostForm
        createItem={createPost}
        inputPlaceholder={"Введите текст поста"}
      />
      <List
        listItems={posts.map((post) => (
          <li key={crypto.randomUUID()}>
            <PostItem deletePost={deletePost} post={post} />
          </li>
        ))}
        listLength={posts.length}
      />
    </div>
  );
};
