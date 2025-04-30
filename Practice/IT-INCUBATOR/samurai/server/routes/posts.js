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
const { auth } = require("../database/users.js");
const { updateUser } = require("../database/users");

router.use(
	async (req, res, next) => await fetchDb(req, res, next, "Social_Network"),
);

router.get("/posts", auth(), async (req, res) => {
		try {
				const postsId = req.user.posts_ids;
				const postsList = await getAllPosts(req.db, postsId);
				
				if (postsList) {
						res.status(200).json(postsList);
				} else {
						res.status(404).send("postsList not found");
				}
		} catch (err) {
				res.status(400).send(err.message);
		}
});

router.post(
	"/posts",
	bodyParser.urlencoded({ extended: false }),
	auth(),
	async (req, res) => {
			try {
					const { postText } = req.body;
					const user = req.user;
					
					if (user) {
							const statusCreate = await addPost(req.db, {
									_id: crypto.randomUUID(),
									postText: !postText || postText === "" ? "Новый пост" : postText,
									created_at: new Date(),
									updated_at: new Date(),
									userId: user._id,
									userImg: user.userImg,
									likeCount: 0,
							});
							
							if (!statusCreate.acknowledged) {
									res.status(404).send("post not created");
							} else {
									const newPost = await getOnePost(req.db, statusCreate.insertedId);
									
									if (newPost) {
											await updateUser(req.db, user._id, { $push: { posts_ids: newPost._id } });
									} else {
											res.status(404).json("postId not added to user posts_ids");
									}
									
									res.status(200).json(newPost);
							}
					} else {
							res.status(400).send("uncorrected request.body");
					}
			} catch (err) {
					res.status(400).send(err.message);
			}
	},
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
	},
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