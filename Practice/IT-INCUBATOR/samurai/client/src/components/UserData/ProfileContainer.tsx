import { connect, ConnectedProps } from "react-redux";
import { TUser } from "../../api/users/types.ts";
import { AppDispatch, RootState } from "../../redux";
import { profileUpdate } from "../../redux/ProfileSlice.ts";
import { Profile } from "./Profile.tsx";

const mapStateToProps = (state: RootState) => ({
		profile: state.profileData.user,
		authState: state.profileData.authState,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
		profileUpdate: (updateProfileData: Partial<TUser>) => dispatch(
			profileUpdate(updateProfileData)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type TProfileProps = ConnectedProps<typeof connector>

export default connector(Profile);