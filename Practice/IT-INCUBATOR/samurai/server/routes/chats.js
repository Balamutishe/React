const router = require( "express" ).Router();
const bodyParser = require( "body-parser" );
const fetchDb = require( "../database/mongoClient.js" );

const {
	getAllChats,
	getOneChat,
	addChat,
	updateChat,
	deleteChat,
} = require( "../database/chats.js" );

router.use(
	async ( req, res, next ) => await fetchDb( req, res, next, "Social_Network" )
);

router.get( "/chats", async ( req, res ) => {
	try {
		const { userId } = req.body;
		
		if ( userId ) {
			const chatsList = await getAllChats( req.db, userId );
			
			if ( chatsList ) {
				res.status( 200 ).json( {
					message: 'chatList found',
					list: chatsList
				} );
			} else {
				res.status( 404 ).send( "chatsList not found" );
			}
		} else {
			res.status( 404 ).send( "userId not found" );
		}
		
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

router.post(
	"/chats/create",
	bodyParser.urlencoded( { extended: false } ),
	async ( req, res ) => {
		try {
			const { userId } = req.body;
			
			if ( userId ) {
				const statusCreate = await addChat( req.db, {
					_id: crypto.randomUUID(),
					chatText: "New chat",
					created_at: new Date(),
					userId: userId,
				} );
				
				if ( !statusCreate.acknowledged ) {
					res.status( 404 ).send( "chat not created" );
				} else {
					return res.status( 200 ).json( {
						message: 'chat created successfully',
						newChatId: statusCreate.insertedId
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

router.get( "/chats/:id", async ( req, res ) => {
	try {
		const { id } = req.params;
		
		if ( id ) {
			const chat = await getOneChat( req.db, id );
			
			if ( chat ) {
				res.status( 200 ).json( {
					message: `Chat ${ id } found`,
					chat: chat
				} );
			} else {
				res.status( 404 ).send( `chat ${ id } not found` );
			}
		} else {
			res.status( 400 ).send( "uncorrected request.body" );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

router.patch(
	"/chats/:id",
	bodyParser.urlencoded( { extended: false } ),
	async ( req, res ) => {
		try {
			const { id } = req.params;
			
			if ( id ) {
				const statusUpdate = await updateChat( req.db, id, req.body );
				
				if ( statusUpdate.modifiedCount === 0 ) {
					res.status( 404 ).send( `unknown chat ID: ${ id }` );
				} else {
					res.status( 200 ).send( `chat ${ id } changed` );
				}
			} else {
				res.status( 400 ).send( "uncorrected request.body" );
			}
		} catch (err) {
			res.status( 400 ).send( err.message );
		}
	}
);

router.delete( "/chats/:id", async ( req, res ) => {
	try {
		const { id } = req.params;
		
		if ( id ) {
			const statusDeleted = await deleteChat( req.db, id );
			
			if ( statusDeleted.deletedCount === 0 ) {
				res.status( 404 ).send( `chat ID: ${ id } not found` );
			} else {
				res.status( 200 ).send( `chat ${ id } delete` );
			}
		} else {
			res.send( { message: "uncorrected request.body" } );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

module.exports = router;