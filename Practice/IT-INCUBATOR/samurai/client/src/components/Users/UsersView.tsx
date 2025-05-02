import { useDispatch, useSelector } from "react-redux";
import { useMutateUserUpdate, useQueryGetAllUsers } from "../../hooks/api";
import { RootState } from "../../redux";
import { setSubscriptionIdUpdate } from "../../redux/ProfileSlice.ts";

import { Users } from "./Users.tsx";

const UsersView = () => {
		const dispatch = useDispatch();
		const userMe = useSelector((state: RootState) => state.profileData.user);
		const subscriptionIdUpdate = useSelector(
			(state: RootState) => state.profileData.subscriptionIdUpdate);
		
		const handlersUsersAction = {
				defineUserSubscription: (id: string) => {
						return !!userMe.subscriptions.find(
							(subscriptionId: string) => subscriptionId === id);
				},
				userSubscriptionUpdate: (id: string) => {
						dispatch(setSubscriptionIdUpdate(id));
						
						userUpdate();
				},
				setPaginationCount: (pageCount: number) => {
						const arrPage = [];
						for (let i = 1; i <= pageCount; i++) {
								arrPage.push(i);
						}
						return arrPage;
				},
		};
		
		const queryUsersGet = useQueryGetAllUsers();
		const userUpdate = useMutateUserUpdate(
			{
					...userMe,
					subscriptions: handlersUsersAction.defineUserSubscription(
						subscriptionIdUpdate) ?
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
									usersData={ queryUsersGet.data }
									handlersUsersActions={ handlersUsersAction }
								/>
						</div>;
		}
};

export default UsersView;