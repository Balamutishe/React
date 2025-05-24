const router = require("express").Router();
const fetchDb = require("../database/mongoClient.js");
const {
		getUsers, createUser, updateUser, deleteUser, findUserByUsername, createSession, deleteSession, hash,
} = require(
	"../database/users.js");
const { auth } = require("../database/users");
const { pick } = require("lodash");
const { urlencoded } = require("body-parser");

router.use(
	async (req, res, next) => await fetchDb(req, res, next, "Social_Network"),
);

router.get("/", auth(), async (req, res) => {
		try {
				if (!req.user) {
						return res.status(401).send("Unauthorized");
				}
				
				const user = pick(req.user,
					["_id", "username", "userImg", "subscriptions", "chats_ids", "posts_ids", "status"]);
				
				res.status(200).json(user);
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.post("/signup", urlencoded({ extended: false }), async (req, res) => {
		try {
				const { username, password } = req.body;
				
				if (username && password) {
						const statusCreate = await createUser(req.db, {
								_id: crypto.randomUUID(),
								username: username,
								password: hash(password),
								userImg: "/src/assets/149071.png",
								subscriptions: [],
						});
						
						if (!statusCreate.acknowledged) {
								res.status(404).send("user not created");
						} else {
								res.status(200).send(`user ID:${ statusCreate.insertedId } registered`);
						}
				} else {
						res.status(400).send("invalid username or password");
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.post(
	"/login",
	urlencoded({ extended: false }),
	async (req, res) => {
			try {
					const { username, password } = req.body;
					
					const user = await findUserByUsername(req.db, username);
					
					if (!user || user.password !== hash(password)) {
							res.status(400).json("Invalid username or password");
					} else {
							const sessionId = await createSession(req.db, user._id);
							res.cookie("sessionId", sessionId, { httpOnly: true })
							.json(pick(user, ["_id", "username", "userImg", "subscriptions", "chats_ids", "posts_ids", "status"]));
					}
			} catch (err) {
					res.status(400).send(err.message);
			}
	},
);

router.get("/logout", auth(), async (req, res) => {
		if (!req.user) {
				res.json("Unauthorized");
		}
		
		await deleteSession(req.db, req.sessionId);
		res.clearCookie("sessionId");
		res.status(201).json("Logout successful");
});

router.get("/users/:page", auth(), async (req, res) => {
		try {
				const page = Number(req.params.page) || 1;
				const pageSize = 5;
				
				const usersListData = await getUsers(req.db, req.query);
				const updateUsersList = usersListData.map((user) =>
					pick(user, ["_id", "username", "userImg", "subscriptions", "chats_ids", "posts_ids", "status"]))
				.filter((user) => user._id !== req.user._id)
				.slice((page - 1) * pageSize, page * pageSize);
				
				const pageCount = Math.ceil(usersListData.length / pageSize);
				
				if (usersListData) {
						res.status(200).json({ usersList: updateUsersList, pageCount: pageCount });
				} else {
						res.status(404).send("users not found");
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.patch("/users", auth(), async (req, res) => {
		try {
				const userData = req.body;
				
				if (req.user) {
						const statusUpdate = await updateUser(req.db, req.user._id, { $set: userData });
						
						if (statusUpdate.modifiedCount === 0) {
								res.status(400).send(`user ${ req.user._id } not updated`);
						} else {
								return res.status(200)
								.json(
									pick(req.user, ["_id", "username", "userImg", "subscriptions", "chats_ids", "posts_ids", "status"]));
						}
				} else {
						res.status(404).send("userId not found");
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.delete("/users", auth(), async (req, res) => {
		try {
				if (req.user) {
						const deletedStatus = await deleteUser(req.db, req.user._id);
						
						if (deletedStatus.deletedCount === 0) {
								res.status(404).send(`user ${ req.user._id } not deleted`);
						} else {
								return res.status(200).json(req.user._id);
						}
				} else {
						res.status(400).send("userId not found");
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

module.exports = router;