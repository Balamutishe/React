import { users } from "../../redux/users.ts";
import { Posts } from "./Posts/Posts.tsx";
import { UserData } from "./UserData/UserData.tsx";
import c from './Profile.module.css'

export const Profile = () => {
    const user = users.find( ( user ) => user.id === '1' );
    const posts = user && user.posts ? user.posts : [];

    return (
            <div className={ c.profile }>
                <UserData user={ user }/>
                <Posts posts={ posts }/>
            </div>
    )
}