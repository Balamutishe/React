import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { UserData } from "./UserData.tsx";

export const UserDataView = () => {
		const { user } = useSelector(
			(state: RootState) => state.profileData);
		
		return <UserData username={ user.username } userImg={ user.userImg }/>;
};