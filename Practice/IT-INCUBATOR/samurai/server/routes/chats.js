const router = require("express").Router();
const bodyParser = require("body-parser");
const fetchDb = require("../database/mongoClient.js");

const {
		getAllChats,
		getOneChat,
		addChat,
		updateChat,
		deleteChat,
} = require("../database/chats.js");
const { deleteAllMessages } = require("../database/messages.js");
const { auth } = require("../database/users.js");
const { getAllMessages } = require("../database/messages");

router.use(
	async (req, res, next) => await fetchDb(req, res, next, "Social_Network"),
);

router.get("/chats/:page", auth(), async (req, res) => {
		try {
				const userId = req.user._id;
				const pageSize = 5;
				const currentPage = Number(req.params.page) || 1;
				
				if (userId) {
						const chatsList = await getAllChats(req.db, userId);
						
						const updateChats = chatsList.map(async (chat) => {
								const chatMessages = await getAllMessages(req.db, chat._id);
								const pageCount = Math.ceil(chatMessages.length / 5);
								const messagesList = chatMessages.slice((currentPage - 1) * pageSize, currentPage * pageSize);
								const updatedChat = {
										...chat,
										messagesList: messagesList,
										messagesPageCount: pageCount,
								};
								
								return updatedChat;
						});
						
						const responseChats = await Promise.all(updateChats);
						
						if (updateChats) {
								res.status(200).json(responseChats);
						} else {
								res.status(404).send("chatsList not found");
						}
				} else {
						res.status(404).send("Unauthorized");
				}
				
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.post(
	"/chats",
	auth(),
	bodyParser.urlencoded({ extended: false }),
	async (req, res) => {
			try {
					const userId = req.user._id;
					const { chatText } = req.body;
					
					if (userId) {
							const statusCreate = await addChat(req.db, {
									_id: crypto.randomUUID(),
									chatText: !chatText || chatText === "" ? "Новый чат" : chatText,
									created_at: new Date(),
									updated_at: new Date(),
									userId: userId,
									messages_ids: [],
							});
							
							if (!statusCreate.acknowledged) {
									res.status(404).send("chat not created");
							} else {
									const createdChat = await getOneChat(req.db, statusCreate.insertedId);
									
									return res.status(200).json(createdChat);
							}
					} else {
							res.status(400).send("uncorrected request.body");
					}
			} catch (err) {
					res.status(400).send(err.message);
			}
	},
);

router.get("/chats/:id/:page", async (req, res) => {
		try {
				const { id, page } = req.params;
				const pageSize = 5;
				
				if (id) {
						const chat = await getOneChat(req.db, id);
						const chatMessages = await getAllMessages(req.db, id);
						const pageCount = Math.ceil(chatMessages.length / pageSize);
						const messagesList = chatMessages.slice((page - 1) * pageSize, page * pageSize);
						
						if (chat && chatMessages) {
								res.status(200).json({ chat, chatMessages: { messagesList, pageCount } });
						} else {
								res.status(404).send(`chat ${ id } not found`);
						}
				} else {
						res.status(400).send("uncorrected request.body");
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.patch(
	"/chats/:id",
	bodyParser.urlencoded({ extended: false }),
	async (req, res) => {
			try {
					const { id } = req.params;
					const { chatText } = req.body;
					
					if (id && chatText) {
							const statusUpdate = await updateChat(req.db, id, { chatText: chatText });
							
							if (statusUpdate.modifiedCount === 0) {
									res.status(404).send(`unknown chat ID: ${ id }`);
							} else {
									res.status(200).json(id);
							}
					} else {
							res.status(400).send("uncorrected request.body");
					}
			} catch (err) {
					res.status(400).send(err.message);
			}
	},
);

router.delete("/chats/:id", async (req, res) => {
		try {
				const { id } = req.params;
				
				if (id) {
						const statusDeleted = await deleteChat(req.db, id);
						
						if (statusDeleted.deletedCount === 0) {
								res.status(404).send(`chat ID: ${ id } not deleted`);
						} else {
								const statusChatMessagesDeleted = await deleteAllMessages(req.db, id);
								
								if (statusChatMessagesDeleted.deletedCount === 0) {
										res.status(200).json(`messages in chat ID: ${ id } not found`);
								} else {
										res.status(200).json(id);
								}
						}
				} else {
						res.send({ message: "uncorrected request.body" });
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

module.exports = router;