import UserImg from "../../../assets/149071.png";
import c from './UserData.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

export const UserData = () => {
	const user = useSelector((state: RootState) => state.userData)

	return (
		<div className={ c.userData }>
			<img src={ UserImg } alt='UserImg' className={ c.userImg }/>
			<div className={ c.userDesc }>
				<div>{ user && user.username !== '' ? user.username :
					'Выберите пользователя' }</div>
				{ user && user.username !== '' && <div>
					<div>UserDescription</div>
					<div>UserDescription</div>
					<div>UserDescription</div>
					<div>UserDescription</div>
				</div> }
			</div>
		</div>
	)
}