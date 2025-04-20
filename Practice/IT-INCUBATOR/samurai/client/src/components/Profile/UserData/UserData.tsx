import { FC } from "react";
import c from "./UserData.module.css";
import { useMutateUserLogout } from "../../../hooks/api";

type TUserData = {
		username: string,
		userImg: string,
}

export const UserData: FC<TUserData> = ({ username, userImg }) => {
		const userLogout = useMutateUserLogout();
		
		const handleLogout = () => {
				userLogout.mutate();
		};
		return (
			<div className={ c.userData }>
					<img src={ userImg } alt="UserImg" className={ c.userImg }/>
					<div className={ c.userDesc }>
							<div>{ username }</div>
							<div style={ { marginBottom: "10px" } }>
									<div>UserDescription</div>
									<div>UserDescription</div>
									<div>UserDescription</div>
									<div>UserDescription</div>
							</div>
							<button onClick={ handleLogout }>Выйти</button>
					</div>
			</div>
		);
};