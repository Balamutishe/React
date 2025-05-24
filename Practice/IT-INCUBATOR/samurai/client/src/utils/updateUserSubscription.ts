export const updateUserSubscriptions = (subscriptions: string[],
	id: string) => {
		const defineSubscription = !!subscriptions.find(
			(subscriptionId: string) => subscriptionId === id);
		
		const updateSubscriptions = defineSubscription ?
			subscriptions.filter(
				(subscriptionId) => subscriptionId !== id)
			: [...subscriptions, ...[id]];
		
		return {
				updateDescriptions: { subscriptions: updateSubscriptions },
				updateStatus: defineSubscription,
		};
};