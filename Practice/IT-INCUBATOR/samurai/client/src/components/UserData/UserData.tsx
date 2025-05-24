import { FC } from "react";
import { useMutateUserLogout } from "../../hooks/api";
import c from "./UserData.module.css";

type TUserData = {
		username: string,
		userImg: string,
		authState: boolean
}

export const UserData: FC<TUserData> = ({ username, userImg, authState }) => {
		const userLogout = useMutateUserLogout();
		
		return (
			<div className={ c.userData }>
					<img src={ userImg } alt="UserImg" className={ c.userImg }/>
					<div className={ c.userDesc }>
							<div className={ c.userDescHeader }>
									<span>{ username }</span>
									<span>{ authState ? "Online" : "Offline" }</span>
							</div>
							<div style={ { marginBottom: "10px" } }>
									<div>UserDescription</div>
									<div>UserDescription</div>
									<div>UserDescription</div>
									<div>UserDescription</div>
							</div>
							<button onClick={ () => userLogout.mutate() }>Выйти</button>
					</div>
			</div>
		);
};