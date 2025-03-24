import { FC } from "react";
import UserImg from '../../assets/149071.png'

import c from './Post.module.css'

type TPost = {
    message: string
    likeCount: number
}

export const Post: FC<TPost> = ( { message, likeCount } ) => {
    return (
            <div className={ c.post }>
                <img src={ UserImg } alt='UserImg' className={ c.img }/>
                <p className={ c.text }>{ message }</p>
                <span>like { likeCount }</span>
            </div>
    )
}