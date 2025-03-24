import { Posts } from "../Posts/Posts.tsx";
import UserImg from '../../../public/149071.png'
import c from './Profile.module.css'

export const Profile = () => {
    return (
            <>
                <div className={ c.profile }>
                    <h2 className={ c.title }>UserData</h2>
                    <div className={ c.user }>
                        <img src={ UserImg } alt='ProfileImg' className={ c.img }/>
                        <div className={ c.data }>
                            <div>Balamutishe</div>
                            <div>
                                <div>UserDescription</div>
                                <div>UserDescription</div>
                                <div>UserDescription</div>
                                <div>UserDescription</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Posts/>
            </>
    )
}