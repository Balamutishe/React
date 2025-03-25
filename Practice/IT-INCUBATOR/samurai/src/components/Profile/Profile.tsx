import { Posts } from "../Posts/Posts.tsx";
import { UserData } from "../UserData/UserData.tsx";
import c from './Profile.module.css'

export const Profile = () => {
    return (
            <div className={ c.profile }>
                <UserData/>
                <Posts/>
            </div>
    )
}