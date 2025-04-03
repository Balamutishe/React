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

router.use(
	async (req, res, next) => await fetchDb(req, res, next, "Social_Network")
);

router.get("/:chatId/messages", async (req, res) => {
	try {
		const { chatId } = req.params;
		
		if (chatId) {
			const messagesList = await getAllMessages(req.db, chatId);
			
			if (messagesList) {
				res.status(200).json(messagesList);
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
	bodyParser.urlencoded({ extended: false }),
	async (req, res) => {
		try {
			const { messageText, userImg, chatId, userId } = req.body;
			
			if (messageText && userImg && chatId && userId) {
				const statusCreate = await addMessage(req.db, {
					_id: crypto.randomUUID(),
					messageText: messageText,
					created_at: new Date(),
					updated_at: new Date(),
					userImg: userImg,
					userId: userId,
					chatId: chatId,
				});
				
				if (!statusCreate.acknowledged) {
					res.status(400).send("message not created");
				} else {
					return res.status(200).json(statusCreate.insertedId);
				}
			} else {
				res.status(400).send("uncorrected request.body");
			}
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
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
	}
);

router.delete("/messages/:id", async (req, res) => {
	try {
		const { id } = req.params;
		
		if (id) {
			const statusDeleted = await deleteMessage(req.db, id);
			
			if (statusDeleted.deletedCount === 0) {
				res.status(404).send(`message ID: ${ id } not found`);
			} else {
				return res.status(200).json(id);
			}
		} else {
			res.send({ message: "uncorrected request.params" });
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

module.exports = router;