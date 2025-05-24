import { FC, useState } from "react";
import { TUser } from "../../api/users/types.ts";
import { useMutateUserUpdate } from "../../hooks/api";
import c from "./UserData.module.css";

type TUserStatusProps = {
		userData: TUser
}

export const UserStatus: FC<TUserStatusProps> = ({ userData }) => {
		const [stateRedactorStatus, setStateRedactorStatus] = useState(false);
		const [statusText, setStatusText] = useState(userData.status);
		const userUpdate = useMutateUserUpdate({ status: statusText });
		
		return (
			<div
				className={ c.userStatusContainer }
				onDoubleClick={ () => setStateRedactorStatus(!stateRedactorStatus) }
			>
					{ !stateRedactorStatus &&
						<span className={ c.userStatus }>{ userData.status === "" ?
							"You don't have a status yet" : userData.status }</span> }
					{ stateRedactorStatus && <input
						name={ "status" }
						value={ statusText }
						onChange={ (e) => setStatusText(e.target.value) }
						onBlur={ () => {
								userUpdate.mutate();
								setStateRedactorStatus(false);
						} }
						autoFocus={ stateRedactorStatus }
					/> }
			</div>
		);
};