const getAllChats = async ( db, userId ) => {
	return await db.collection( "chats" ).find( { userId: userId } ).toArray();
};

const getOneChat = async ( db, id ) => {
	return await db.collection( "chats" ).findOne( { _id: id } );
};

const addChat = async ( db, data ) => {
	return await db.collection( "chats" ).insertOne( data );
};

const updateChat = async ( db, id, data ) => {
	return await db.collection( "chats" ).updateOne( { _id: id }, { $set: data } );
};

const deleteChat = async ( db, id ) => {
	return await db.collection( "chats" ).deleteOne( { _id: id } );
};

module.exports = {
	getAllChats,
	getOneChat,
	addChat,
	updateChat,
	deleteChat,
};