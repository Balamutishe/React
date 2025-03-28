import { FC, useState } from "react";

import { Post } from './Post.tsx'
import { TPostsList } from "../../../redux/users.ts";
import c from './Posts.module.css'

type TPostsProps = {
    posts: TPostsList
}

export const Posts: FC<TPostsProps> = ( { posts } ) => {
    const [ textPost, setTextPost ] = useState( '' )
    
    return (
            <div >
                <h2 className={ c.title }>PostsList</h2 >
                <form className={ c.form }>
                    <textarea
                            className={ c.textarea } value={ textPost }
                            onChange={ ( e ) => setTextPost( e.target.value ) }
                    ></textarea >
                    <button >
                        Add Post
                    </button >
                </form >
                <ul className={ c.list }>
                    { posts && posts.map( ( post ) => (
                            <li className={ c.listItem }>
                                <Post post={ post }/>
                            </li >
                    ) ) }
                </ul >
            </div >
    )
}