const router = require("express").Router();
const bodyParser = require("body-parser");
const fetchDb = require("../database/mongoClient.js");

const {
		getAllMessages,
		getOneMessage,
		addMessage,
		updateMessage,
		deleteMessage,
} = require("../database/messages.js");
const { auth } = require("../database/users.js");
const { updateUser } = require("../database/users");
const { updateChat } = require("../database/chats");

router.use(
	async (req, res, next) => await fetchDb(req, res, next, "Social_Network"),
);

router.get("/messages/:chatId/:page", auth(), async (req, res) => {
		try {
				const { chatId, page } = req.params;
				const pageSize = 5;
				
				if (chatId) {
						const messagesData = await getAllMessages(req.db, chatId);
						const pageCount = Math.ceil(messagesData.length / pageSize);
						const messagesList = messagesData.slice((page - 1) * pageSize, page * pageSize);
						
						if (messagesList) {
								res.status(200).json({ messagesList: messagesList, pageCount: pageCount });
						} else {
								res.status(404).send({ message: "messagesList not found" });
						}
				} else {
						res.status(404).send({ message: "uncorrected request.body" });
				}
				
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.post(
	"/messages",
	auth(),
	bodyParser.urlencoded({ extended: false }),
	async (req, res) => {
			try {
					const user = req.user;
					const { messageText, chatId } = req.body;
					
					if (chatId && user) {
							const statusCreate = await addMessage(req.db, {
									_id: crypto.randomUUID(),
									messageText: !messageText || messageText === "" ? "Новое сообщение" : messageText,
									created_at: new Date(),
									updated_at: new Date(),
									userImg: user.userImg,
									userId: user._id,
									chatId: chatId,
							});
							
							if (!statusCreate.acknowledged) {
									res.status(400).send("message not created");
							} else {
									const newMessage = await getOneMessage(req.db, statusCreate.insertedId);
									
									res.status(200).json(newMessage);
							}
					} else {
							res.status(400).send("uncorrected request.body");
					}
			} catch (err) {
					res.status(400).send(err.message);
			}
	},
);

router.get("/messages/:id", async (req, res) => {
		try {
				const { id } = req.params;
				
				if (id) {
						const message = await getOneMessage(req.db, id);
						
						if (message) {
								return res.status(200).json(message);
						} else {
								res.status(404).send(`message ${ id } not found`);
						}
				} else {
						res.status(400).send("uncorrected request.params");
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.patch(
	"/messages/:id",
	bodyParser.urlencoded({ extended: false }),
	async (req, res) => {
			try {
					const { id } = req.params;
					const { messageText } = req.body;
					
					if (id && messageText) {
							const statusUpdate = await updateMessage(req.db, id, { messageText: messageText });
							
							if (statusUpdate.modifiedCount === 0) {
									res.status(404).send(`unknown message ID: ${ id }`);
							} else {
									return res.status(200).json(id);
							}
					} else {
							res.status(400).send("uncorrected request.body");
					}
			} catch (err) {
					res.status(400).send(err.message);
			}
	},
);

router.delete("/messages/:messageId", async (req, res) => {
		try {
				const { messageId } = req.params;
				
				if (messageId) {
						const statusDeleted = await deleteMessage(req.db, messageId);
						
						if (statusDeleted.deletedCount === 0) {
								res.status(404).send(`message ID: ${ messageId } not found`);
						} else {
								return res.status(200).json(messageId);
						}
				} else {
						res.send({ message: "uncorrected request.params" });
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

module.exports = router;