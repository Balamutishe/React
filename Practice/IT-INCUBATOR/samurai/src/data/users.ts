import UserImg from '../assets/149071.png'

export type TUser = {
	id: string;
	name: string;
	imgUrl: string;
	chats: TChatsList;
	posts: TPostsList;
}

export type TUsersList = Array<TUser>;

export type TChat = {
	id: string;
	title: string;
	imgUrl: string;
	messages?: TMessagesList;
}

export type TChatsList = Array<TChat>

export type TMessage = {
	id: string;
	message: string;
}

export type TMessagesList = Array<TMessage>;

export type TPost = {
	id: string;
	message: string;
	likeCount: number;
	imgUrl: string;
}

export type TPostsList = Array<TPost>;

export const users: TUsersList = [
	{
		id: '1',
		name: 'Alex',
		imgUrl: UserImg,
		chats: [
			{
				id: '1',
				title: 'Dialog1',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message1' },
					{ id: crypto.randomUUID(), message: 'Message2' },
					{ id: crypto.randomUUID(), message: 'Message3' },
					{ id: crypto.randomUUID(), message: 'Message4' },
				]
			},
			{
				id: '2',
				title: 'Dialog2',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message5' },
					{ id: crypto.randomUUID(), message: 'Message6' },
					{ id: crypto.randomUUID(), message: 'Message7' },
					{ id: crypto.randomUUID(), message: 'Message8' },
				]
			},
		],
		posts: [
			{
				id: crypto.randomUUID(),
				message: 'Post1',
				likeCount: 10,
				imgUrl: UserImg
			},
			{
				id: crypto.randomUUID(),
				message: 'Post1',
				likeCount: 20,
				imgUrl: UserImg
			}
		]
	},
	{
		id: '2',
		name: 'Kate',
		imgUrl: UserImg,
		chats: [
			{
				id: '3',
				title: 'Dialog3',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message9' },
					{ id: crypto.randomUUID(), message: 'Message10' },
					{ id: crypto.randomUUID(), message: 'Message11' },
					{ id: crypto.randomUUID(), message: 'Message12' },
				]
			},
			{
				id: '4',
				title: 'Dialog4',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message13' },
					{ id: crypto.randomUUID(), message: 'Message14' },
					{ id: crypto.randomUUID(), message: 'Message15' },
					{ id: crypto.randomUUID(), message: 'Message16' },
				]
			},
		],
		posts: [
			{
				id: crypto.randomUUID(),
				message: 'Post2',
				likeCount: 20,
				imgUrl: UserImg
			},
			{
				id: crypto.randomUUID(),
				message: 'Post3',
				likeCount: 30,
				imgUrl: UserImg
			},
			{
				id: crypto.randomUUID(),
				message: 'Post4',
				likeCount: 40,
				imgUrl: UserImg
			}
		]
	},
	{
		id: '3',
		name: 'Jora',
		imgUrl: UserImg,
		chats: [
			{
				id: '5',
				title: 'Dialog5',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message17' },
					{ id: crypto.randomUUID(), message: 'Message18' },
					{ id: crypto.randomUUID(), message: 'Message19' },
					{ id: crypto.randomUUID(), message: 'Message20' },
				]
			},
			{
				id: '6',
				title: 'Dialog6',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message21' },
					{ id: crypto.randomUUID(), message: 'Message22' },
					{ id: crypto.randomUUID(), message: 'Message23' },
					{ id: crypto.randomUUID(), message: 'Message24' },
				]
			},
		],
		posts: [
			{
				id: crypto.randomUUID(),
				message: 'Post3',
				likeCount: 20,
				imgUrl: UserImg
			},
			{
				id: crypto.randomUUID(),
				message: 'Post4',
				likeCount: 30,
				imgUrl: UserImg
			}
		]
	},
	{
		id: '4',
		name: 'Lena',
		imgUrl: UserImg,
		chats: [
			{
				id: '7',
				title: 'Dialog7',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message25' },
					{ id: crypto.randomUUID(), message: 'Message26' },
					{ id: crypto.randomUUID(), message: 'Message27' },
					{ id: crypto.randomUUID(), message: 'Message28' },
				]
			},
			{
				id: '8',
				title: 'Dialog8',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message29' },
					{ id: crypto.randomUUID(), message: 'Message30' },
					{ id: crypto.randomUUID(), message: 'Message31' },
					{ id: crypto.randomUUID(), message: 'Message32' },
				]
			},
		],
		posts: [
			{
				id: crypto.randomUUID(),
				message: 'Post6',
				likeCount: 20,
				imgUrl: UserImg
			},
			{
				id: crypto.randomUUID(),
				message: 'Post7',
				likeCount: 20,
				imgUrl: UserImg
			}
		]
	},
	{
		id: '5',
		name: 'Dima',
		imgUrl: UserImg,
		chats: [
			{
				id: '9',
				title: 'Dialog9',
				imgUrl: UserImg,
				messages: [
					{ id: crypto.randomUUID(), message: 'Message33' },
					{ id: crypto.randomUUID(), message: 'Message34' },
					{ id: crypto.randomUUID(), message: 'Message35' },
					{ id: crypto.randomUUID(), message: 'Message36' },
				]
			},
		],
		posts: [
			{
				id: crypto.randomUUID(),
				message: 'Post8',
				likeCount: 20,
				imgUrl: UserImg
			}
		]
	},
]