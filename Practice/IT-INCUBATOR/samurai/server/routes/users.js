const router = require("express").Router();
const fetchDb = require("../database/mongoClient.js");
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../database/users.js');

router.use(
	async (req, res, next) => await fetchDb(req, res, next, "Social_Network")
);

router.get("/users", async (req, res) => {
	try {
		const usersList = await getUsers(req.db, req.query);
		
		if (usersList) {
			res.status(200).json(usersList);
		} else {
			res.status(404).send("users not found");
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.get("/users/:userId", async (req, res) => {
	try {
		const { userId } = req.params;
		
		if (userId) {
			const user = await getUserById(req.db, userId);
			
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).send(`user ${ userId } not found`);
			}
		} else {
			res.status(400).send("uncorrected request.body");
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.post('/users', async (req, res) => {
	try {
		const { username, password, userImg } = req.body;
		
		if (username && password) {
			const statusCreate = await createUser(req.db, {
				_id: crypto.randomUUID(),
				username: username,
				password: password,
				userImg: userImg,
				subscriptions: []
			});
			
			if (!statusCreate.acknowledged) {
				res.status(404).send("user not created");
			} else {
				return res.status(200).json(statusCreate.insertedId);
			}
		} else {
			res.status(400).send('invalid username or password');
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.patch('/users/:userId', async (req, res) => {
	try {
		const { userId } = req.params;
		const user = req.body;
		
		if (userId) {
			const statusUpdate = await updateUser(req.db, userId,
				{ username: user.username, password: user.password, subscriptions: user.subscriptions });
			
			if (statusUpdate.modifiedCount === 0) {
				res.status(400).send(`user ${ userId } not updated`);
			} else {
				return res.status(200).json(userId);
			}
		} else {
			res.status(404).send('userId not found');
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.delete('/users/:userId', async (req, res) => {
	try {
		const { userId } = req.params;
		
		if (userId) {
			const deletedStatus = await deleteUser(req.db, userId);
			
			if (deletedStatus.deletedCount === 0) {
				res.status(404).send(`user ${ userId } not deleted`);
			} else {
				return res.status(200).json(userId);
			}
		} else {
			res.status(400).send('userId not found');
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
})

module.exports = router;