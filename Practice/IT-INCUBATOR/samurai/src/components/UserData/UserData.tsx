import c from './UserData.module.css'
import UserImg from "../../assets/149071.png";

export const UserData = () => {
    return (
            <div className={ c.userData }>
                <img src={ UserImg } alt='UserImg' className={ c.userImg }/>
                <div className={ c.userDesc }>
                    <div>Balamutishe</div>
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