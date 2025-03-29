const getAllMessages = async ( db, chatId ) => {
	return await db.collection( "messages" ).find( { chatId: chatId } ).toArray();
};

const getOneMessage = async ( db, id ) => {
	return await db.collection( "messages" ).findOne( { _id: id } );
};

const addMessage = async ( db, data ) => {
	return await db.collection( "messages" ).insertOne( data );
};

const updateMessage = async ( db, id, data ) => {
	return await db.collection( "messages" ).updateOne( { _id: id }, { $set: data } );
};

const deleteMessage = async ( db, id ) => {
	return await db.collection( "messages" ).deleteOne( { _id: id } );
};

module.exports = {
	getAllMessages,
	getOneMessage,
	addMessage,
	updateMessage,
	deleteMessage,
};