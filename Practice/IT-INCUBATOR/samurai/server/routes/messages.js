const router = require( "express" ).Router();
const bodyParser = require( "body-parser" );
const fetchDb = require( "../database/mongoClient.js" );

const {
	getAllMessages,
	getOneMessage,
	addMessage,
	updateMessage,
	deleteMessage,
} = require( "../database/messages.js" );

router.use(
	async ( req, res, next ) => await fetchDb( req, res, next, "Social_Network" )
);

router.get( "/messages", async ( req, res ) => {
	try {
		const { chatId } = req.body;
		
		if ( chatId ) {
			const messagesList = await getAllMessages( req.db, chatId );
			
			if ( messagesList ) {
				res.status( 200 ).json( {
					message: 'messagesList found',
					list: messagesList
				} );
			} else {
				res.status( 404 ).send( { message: "messagesList not found" } );
			}
		} else {
			res.status( 404 ).send( { message: "uncorrected request.body" } );
		}
		
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

router.post(
	"/messages/create",
	bodyParser.urlencoded( { extended: false } ),
	async ( req, res ) => {
		try {
			const { messageText, chatId, userId } = req.body;
			
			if ( messageText && chatId && userId ) {
				const statusCreate = await addMessage( req.db, {
					_id: crypto.randomUUID(),
					messageText: messageText,
					created_at: new Date(),
					userId: userId,
					chatId: chatId,
				} );
				
				if ( !statusCreate.acknowledged ) {
					res.status( 404 ).send( "message not created" );
				} else {
					return res.status( 200 ).json( {
						message: 'message created successfully',
						newMessageId: statusCreate.insertedId
					} );
				}
			} else {
				res.status( 400 ).send( "uncorrected request.body" );
			}
		} catch (err) {
			res.status( 400 ).send( err.message );
		}
	}
);

router.get( "/messages/:id", async ( req, res ) => {
	try {
		const { id } = req.params;
		
		if ( id ) {
			const chatMessage = await getOneMessage( req.db, id );
			
			if ( chatMessage ) {
				res.status( 200 ).json( {
					message: `message ${ id } found`,
					chatMessage: chatMessage
				} );
			} else {
				res.status( 404 ).send( `message ${ id } not found` );
			}
		} else {
			res.status( 400 ).send( "uncorrected request.params" );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

router.patch(
	"/messages/:id",
	bodyParser.urlencoded( { extended: false } ),
	async ( req, res ) => {
		try {
			const { id } = req.params;
			const { messageText } = req.body;
			
			if ( id && messageText ) {
				const statusUpdate = await updateMessage( req.db, id, { messageText: messageText } );
				
				if ( statusUpdate.modifiedCount === 0 ) {
					res.status( 404 ).send( `unknown message ID: ${ id }` );
				} else {
					res.status( 200 ).send( `message ${ id } changed` );
				}
			} else {
				res.status( 400 ).send( "uncorrected request.body" );
			}
		} catch (err) {
			res.status( 400 ).send( err.message );
		}
	}
);

router.delete( "/messages/:id", async ( req, res ) => {
	try {
		const { id } = req.params;
		
		if ( id ) {
			const statusDeleted = await deleteMessage( req.db, id );
			
			if ( statusDeleted.deletedCount === 0 ) {
				res.status( 404 ).send( `message ID: ${ id } not found` );
			} else {
				res.status( 200 ).send( `message ${ id } delete` );
			}
		} else {
			res.send( { message: "uncorrected request.params" } );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

module.exports = router;