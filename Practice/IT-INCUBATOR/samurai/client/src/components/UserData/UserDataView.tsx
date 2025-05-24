import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { UserData } from "./UserData.tsx";

export const UserDataView = () => {
		const { user, authState } = useSelector(
			(state: RootState) => state.profileData);
		
		return <UserData
			userData={ user }
			authState={ authState }
		/>;
};