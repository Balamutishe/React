import { FC } from "react";

import { Post } from './Post.tsx'
import { TPostsList } from "../../../data/users.ts";
import c from './Posts.module.css'

type TPostsProps = {
    posts: TPostsList
}

export const Posts: FC<TPostsProps> = ( { posts } ) => {
    return (
            <div>
                <h2 className={ c.title }>PostsList</h2>
                <form className={ c.form }>
                    <textarea className={ c.textarea }/>
                    <button>
                        Add Post
                    </button>
                </form>
                <ul className={ c.list }>
                    { posts && posts.map( ( post ) => (
                            <li className={ c.listItem }>
                                <Post post={ post }/>
                            </li>
                    ) ) }
                </ul>
            </div>
    )
}