import { FC } from "react";
import { useSelector } from "react-redux";

import { TUser } from "../../api/users/types.ts";
import UserImg from "../../assets/149071.png";
import { useMutateUserUpdate } from "../../hooks/api";
import { RootState } from "../../redux";
import { updateUserSubscriptions } from "../../utils/updateUserSubscription.ts";
import c from "./Users.module.css";

type TUserProps = {
		user: TUser,
}

export const User: FC<TUserProps> = ({
		user,
}) => {
		const userMe = useSelector((state: RootState) => state.profileData.user);
		const userUpdate = useMutateUserUpdate(
			updateUserSubscriptions(userMe, user._id).updateUserData);
		
		return (
			<div className={ c.userContainer }>
					<div className={ c.userImgContainer }>
							<img src={ UserImg } alt="UserImg" className={ c.userImg }/>
					</div>
					<div className={ c.userContent }>
							<div className={ c.userData }>
									<h3>{ user.username }</h3>
									<p>User status</p>
							</div>
							<div className={ c.userActions }>
									<button
										onClick={ () => userUpdate() }
									>{ updateUserSubscriptions(
										userMe, user._id).updateStatus ? "Unfollow" :
										"Follow" }</button>
							</div>
					</div>
			</div>
		);
};