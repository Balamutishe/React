import { FC } from "react";
import UserImg from '../../assets/149071.png'

import c from './Posts.module.css'

type TPost = {
    message: string
    likeCount: number
}

export const Post: FC<TPost> = ( { message, likeCount } ) => {
    return (
            <div className={ c.post }>
                <img src={ UserImg } alt='UserImg' className={ c.postImg }/>
                <p className={ c.postText }>{ message }</p>
                <span>like { likeCount }</span>
            </div>
    )
}