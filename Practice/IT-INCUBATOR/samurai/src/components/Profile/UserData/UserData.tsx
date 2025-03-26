import { FC } from "react";

import { TUser } from "../../../data/users.ts";
import UserImg from "../../../assets/149071.png";
import c from './UserData.module.css'

type TUserDataProps = {
    user: TUser | undefined
}

export const UserData: FC<TUserDataProps> = ( { user } ) => {
    return (
            <div className={ c.userData }>
                <img src={ UserImg } alt='UserImg' className={ c.userImg }/>
                <div className={ c.userDesc }>
                    <div>{ user && user.name ? user.name : 'Имя не найдено' }</div>
                    <div>
                        <div>UserDescription</div>
                        <div>UserDescription</div>
                        <div>UserDescription</div>
                        <div>UserDescription</div>
                    </div>
                </div>
            </div>
    )
}