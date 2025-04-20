import { useDispatch, useSelector } from "react-redux";

import { useQueryGetAllUsers } from "../../hooks/api/users/useQueryGetAllUsers.ts";
import { useMutateUserUpdate } from "../../hooks/api/users/useMutateUserUpdate.ts";
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
		
		const { users, status, refetch } = useQueryGetAllUsers();
		const userUpdate = useMutateUserUpdate(
			{
					...userMe,
					subscriptions: handleDefineUserSubscription(subscriptionIdUpdate) ?
						userMe.subscriptions.filter(
							(subscriptionId) => subscriptionId !== subscriptionIdUpdate) :
						[...userMe.subscriptions, ...[subscriptionIdUpdate]],
					
			}, refetch);
		
		switch (status) {
				case "error":
						return <div>
								Произошла ошибка при запросе
								<button onClick={ () => refetch() }>Повторить запрос</button>
						</div>;
				case "success":
						return <div>
								<Users
									users={ users }
									handleDefineUserSubscription={ handleDefineUserSubscription }
									handleUserSubscriptionUpdate={ handleUserSubscriptionUpdate }
								/>
						</div>;
		}
};