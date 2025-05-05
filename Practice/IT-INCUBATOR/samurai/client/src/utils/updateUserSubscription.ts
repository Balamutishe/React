import { TUser } from "../api/users/types.ts";

export const updateUserSubscriptions = (userData: TUser, id: string) => {
		const defineSubscription = !!userData.subscriptions.find(
			(subscriptionId: string) => subscriptionId === id);
		
		const updateSubscriptions = defineSubscription ?
			userData.subscriptions.filter(
				(subscriptionId) => subscriptionId !== id)
			: [...userData.subscriptions, ...[id]];
		
		return {
				updateUserData: { ...userData, subscriptions: updateSubscriptions },
				updateStatus: defineSubscription,
		};
};