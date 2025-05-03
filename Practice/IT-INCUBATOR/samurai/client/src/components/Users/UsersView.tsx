import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useQueryGetAllUsers } from "../../hooks/api";
import { RootState } from "../../redux";
import { Users } from "./Users.tsx";


const UsersView = () => {
		const usersData = useSelector(
			(state: RootState) => state.usersData.usersData);
		const queryUsersGet = useQueryGetAllUsers(usersData.usersPage);
		
		// const subscriptionIdUpdate = useSelector(
		// 	(state: RootState) => state.profileData.subscriptionIdUpdate);
		
		// const handlersUsersAction = {
		// 		defineUserSubscription: (id: string) => {
		// 				return !!userMe.subscriptions.find(
		// 					(subscriptionId: string) => subscriptionId === id);
		// 		},
		// 		userSubscriptionUpdate: (id: string) => {
		// 				dispatch(setSubscriptionIdUpdate(id));
		//
		// 				userUpdate();
		// 		},
		// 		setPaginationCount: (pageCount: number) => {
		// 				const arrPage = [];
		// 				for (let i = 1; i <= pageCount; i++) {
		// 						arrPage.push(i);
		// 				}
		// 				return arrPage;
		// 		},
		// };
		
		// const userUpdate = useMutateUserUpdate(
		// 	{
		// 			...userMe,
		// 			subscriptions: handlersUsersAction.defineUserSubscription(
		// 				subscriptionIdUpdate) ?
		// 				userMe.subscriptions.filter(
		// 					(subscriptionId) => subscriptionId !== subscriptionIdUpdate) :
		// 				[...userMe.subscriptions, ...[subscriptionIdUpdate]],
		//
		// 	});
		
		useEffect(() => {
				queryUsersGet.refetch();
		}, [usersData.usersPage]);
		
		switch (queryUsersGet.status) {
				case "error":
						return <div>
								Произошла ошибка при запросе
								<button onClick={ () => queryUsersGet.refetch() }>Повторить
										запрос</button>
						</div>;
				case "success":
						return <div>
								<Users users={ usersData.users }/>
						</div>;
		}
};

export default UsersView;