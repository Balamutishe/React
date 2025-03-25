import { Profile } from "../../components/Profile/Profile.tsx";
import c from './UserPage.module.css'

export const UserPage = () => {
    return (
            <div className={ c.userPageContainer }>
                <Profile/>
            </div>
    )
}