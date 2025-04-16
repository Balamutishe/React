import { useQueryGetAllUsers } from "../../hooks/api/useQueryGetAllUsers.ts";
import { Users } from "./Users.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useMutateUserUpdate } from "../../hooks/api/useMutateUserUpdate.ts";
import { setSubscriptionIdUpdate } from "../../redux/ProfileSlice.ts";

export const UsersView = () => {
	const dispatch = useDispatch();
	const userMe = useSelector((state: RootState) => state.profileData.user)
	const subscriptionIdUpdate = useSelector(
		(state: RootState) => state.profileData.subscriptionIdUpdate)

	const handleDefineUserSubscription = (id: string) => {
		return !!userMe.subscriptions.find(
			(subscriptionId: string) => subscriptionId === id)
	}
	const handleUserSubscriptionUpdate = (subscriptionId: string) => {
		dispatch(setSubscriptionIdUpdate(subscriptionId))
		userUpdate()
	}

	const { users, status, refetch } = useQueryGetAllUsers()
	const userUpdate = useMutateUserUpdate(userMe._id,
		{
			...userMe,
			subscriptions: handleDefineUserSubscription(subscriptionIdUpdate) ?
				userMe.subscriptions.filter(
					(subscriptionId) => subscriptionId !== subscriptionIdUpdate) :
				[...userMe.subscriptions, ...[subscriptionIdUpdate]]

		}, refetch)


	switch (status) {
		case "error":
			return <div>
				Произошла ошибка при запросе
				<button onClick={ () => refetch() }>Повторить запрос</button>
			</div>
		case "success":
			return <div>
				<Users
					users={ users }
					handleDefineUserSubscription={ handleDefineUserSubscription }
					handleUserSubscriptionUpdate={ handleUserSubscriptionUpdate }
				/>
			</div>
	}
}