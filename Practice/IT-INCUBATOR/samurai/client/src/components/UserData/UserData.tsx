import { FC } from "react";
import { TUser } from "../../api/users/types.ts";
import { useMutateUserLogout } from "../../hooks/api";
import c from "./UserData.module.css";
import { UserStatus } from "./UserStatus.tsx";

type TUserData = {
		userData: TUser
		authState: boolean
}

export const UserData: FC<TUserData> = ({ userData, authState }) => {
		const userLogout = useMutateUserLogout();
		
		return (
			<div className={ c.userData }>
					<img src={ userData.userImg } alt="UserImg" className={ c.userImg }/>
					<div className={ c.userDesc }>
							<div className={ c.userDescHeader }>
									<span>{ userData.username }</span>
									<span>{ authState ? "Online" : "Offline" }</span>
									<UserStatus userData={ userData }/>
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