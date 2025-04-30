const getAllPosts = async (db, postsId) => {
		return await db.collection("posts").find({ _id: { $in: postsId } }).toArray();
};

const getOnePost = async (db, id) => {
		return await db.collection("posts").findOne({ _id: id });
};

const addPost = async (db, data) => {
		return await db.collection("posts").insertOne(data);
};

const updatePost = async (db, id, data) => {
		return await db.collection("posts").updateOne({ _id: id }, { $set: data });
};

const deletePost = async (db, id) => {
		return await db.collection("posts").deleteOne({ _id: id });
};

module.exports = {
		getAllPosts,
		getOnePost,
		addPost,
		updatePost,
		deletePost,
};