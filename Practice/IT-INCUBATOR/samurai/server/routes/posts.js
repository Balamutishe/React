const router = require("express").Router();
const bodyParser = require("body-parser");
const fetchDb = require("../database/mongoClient.js");

const {
	getAllPosts,
	getOnePost,
	addPost,
	updatePost,
	deletePost,
} = require("../database/posts.js");

router.use(
	async (req, res, next) => await fetchDb(req, res, next, "Social_Network")
);

router.get("/posts", async (req, res) => {
	try {
		const { userId } = req.body;
		
		if (userId) {
			const postsList = await getAllPosts(req.db, userId);
			
			if (postsList) {
				res.status(200).json(postsList);
			} else {
				res.status(404).send('postsList not found');
			}
		} else {
			res.status(404).send("userId not found");
		}
		
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.post(
	"/posts",
	bodyParser.urlencoded({ extended: false }),
	async (req, res) => {
		try {
			const { postText, userId, userImg } = req.body;
			
			if (userId && userImg) {
				const statusCreate = await addPost(req.db, {
					_id: crypto.randomUUID(),
					postText: postText,
					created_at: new Date(),
					updated_at: new Date(),
					userId: userId,
					userImg: userImg,
					likeCount: 0
				});
				
				if (!statusCreate.acknowledged) {
					res.status(404).send("post not created");
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

router.get("/posts/:id", async (req, res) => {
	try {
		const { id } = req.params;
		
		if (id) {
			const post = await getOnePost(req.db, id);
			
			if (post) {
				res.status(200).json(post);
			} else {
				res.status(404).send(`post ${ id } not found`);
			}
		} else {
			res.status(400).send("uncorrected request.body");
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.patch(
	"/posts/:id",
	bodyParser.urlencoded({ extended: false }),
	async (req, res) => {
		try {
			const { id } = req.params;
			const { postText } = req.body;
			
			if (id && postText) {
				const statusUpdate = await updatePost(req.db, id, { postText: postText });
				
				if (statusUpdate.modifiedCount === 0) {
					res.status(404).send(`unknown post ID: ${ id }`);
				} else {
					res.status(200).json(id);
				}
			} else {
				res.status(400).send("uncorrected request.body");
			}
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
);

router.delete("/posts/:id", async (req, res) => {
	try {
		const { id } = req.params;
		
		if (id) {
			const statusDeleted = await deletePost(req.db, id);
			
			if (statusDeleted.deletedCount === 0) {
				res.status(404).send(`post ID: ${ id } not found`);
			} else {
				res.status(200).json(id);
			}
		} else {
			res.send({ message: "uncorrected request.body" });
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

module.exports = router;