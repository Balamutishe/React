import { useDispatch, useSelector } from "react-redux";

import { useMutateUserUpdate, useQueryGetAllUsers } from "../../hooks/api";
import { setSubscriptionIdUpdate } from "../../redux/ProfileSlice.ts";
import { RootState } from "../../redux";
import { Users } from "./Users.tsx";

export const UsersView = () => {
		const dispatch = useDispatch();
		const userMe = useSelector((state: RootState) => state.profileData.user);
		const subscriptionIdUpdate = useSelector(
			(state: RootState) => state.profileData.subscriptionIdUpdate);
		
		const handleDefineUserSubscription = (id: string) => {
				return !!userMe.subscriptions.find(
					(subscriptionId: string) => subscriptionId === id);
		};
		const handleUserSubscriptionUpdate = (subscriptionId: string) => {
				dispatch(setSubscriptionIdUpdate(subscriptionId));
				userUpdate();
		};
		
		const queryUsersGet = useQueryGetAllUsers();
		const userUpdate = useMutateUserUpdate(
			{
					...userMe,
					subscriptions: handleDefineUserSubscription(subscriptionIdUpdate) ?
						userMe.subscriptions.filter(
							(subscriptionId) => subscriptionId !== subscriptionIdUpdate) :
						[...userMe.subscriptions, ...[subscriptionIdUpdate]],
					
			});
		
		switch (queryUsersGet.status) {
				case "error":
						return <div>
								Произошла ошибка при запросе
								<button onClick={ () => queryUsersGet.refetch() }>Повторить
										запрос</button>
						</div>;
				case "success":
						return <div>
								<Users
									users={ queryUsersGet.data.usersList }
									handleDefineUserSubscription={ handleDefineUserSubscription }
									handleUserSubscriptionUpdate={ handleUserSubscriptionUpdate }
								/>
						</div>;
		}
};