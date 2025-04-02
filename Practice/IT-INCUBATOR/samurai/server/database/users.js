async function getUsers(db, data) {
	return await db.collection("users").find(data).toArray();
}

async function getUserById(db, id) {
	return await db.collection("users").findOne({ _id: id });
}

async function createUser(db, data) {
	return await db.collection("users").insertOne(data)
}

async function deleteUser(db, id) {
	return await db.collection("users").deleteOne({ _id: id });
}

async function updateUser(db, id, data) {
	return await db.collection("users").updateOne({ _id: id }, { $set: data })
}


module.exports = {
	getUsers,
	getUserById,
	createUser,
	deleteUser,
	updateUser
}