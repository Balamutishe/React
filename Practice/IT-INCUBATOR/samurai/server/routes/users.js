const router = require( "express" ).Router();
const fetchDb = require( "../database/mongoClient.js" );
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require( '../database/users.js' );

router.use(
	async ( req, res, next ) => await fetchDb( req, res, next, "Social_Network" )
);

router.get( "/users", async ( req, res ) => {
	try {
		const usersList = await getUsers( req.db, req.query );
		
		if ( usersList ) {
			res.status( 200 ).json( usersList );
		} else {
			res.status( 404 ).send( "users not found" );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

router.get( "/users/:userId", async ( req, res ) => {
	try {
		const { userId } = req.params;
		
		if ( userId ) {
			const user = await getUserById( req.db, userId );
			
			if ( user ) {
				res.status( 200 ).json( { message: `user ${ userId } found`, user: user } );
			} else {
				res.status( 404 ).send( { message: `user ${ userId } not found` } );
			}
		} else {
			res.status( 400 ).send( { message: "uncorrected request.body" } );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

router.post( '/users/create', async ( req, res ) => {
	try {
		const { username, password } = req.body;
		
		if ( username && password ) {
			const statusCreate = await createUser( req.db, {
				_id: crypto.randomUUID(),
				username: username,
				password: password,
				avatar: ''
			} );
			
			if ( !statusCreate.acknowledged ) {
				res.status( 404 ).send( "user not created" );
			} else {
				return res.status( 200 ).json( { message: "user already created", userId: statusCreate.insertedId } );
			}
		} else {
			res.status( 400 ).send( 'invalid username or password' );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

router.patch( '/users/:userId', async ( req, res ) => {
	try {
		const { userId } = req.params;
		const { username, password } = req.body;
		
		if ( userId && username && password ) {
			const statusUpdate = await updateUser( req.db, userId, { username: username, password: password } );
			
			if ( statusUpdate.modifiedCount === 0 ) {
				res.status( 400 ).send( `user ${ userId } not updated` );
			} else {
				return res.status( 200 ).json( { message: `user ${ userId } already updated`, userId: userId } );
			}
		} else {
			res.status( 404 ).send( 'userId not found' );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} );

router.delete( '/users/:userId', async ( req, res ) => {
	try {
		const { userId } = req.params;
		
		if ( userId ) {
			const deleteStatusUser = await deleteUser( req.db, userId );
			
			if ( deleteStatusUser.deletedCount === 0 ) {
				res.status( 404 ).send( { message: `user ${ userId } already deleted`, userId: userId } );
			} else {
				return res.status( 200 ).send( { message: `user ${ userId } not deleted`, userId: userId } );
			}
		} else {
			res.status( 400 ).send( 'userId not found' );
		}
	} catch (err) {
		res.status( 400 ).send( err.message );
	}
} )

module.exports = router;