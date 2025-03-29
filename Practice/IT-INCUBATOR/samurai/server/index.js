const express = require( "express" );
const chats = require( "./routes/chats.js" );
const users = require( "./routes/users.js" );
const messages = require( "./routes/messages.js" );

const app = express();
app.use( express.json() );

app.use( "/", users, chats, messages );

const port = process.env.PORT || 3000;

app.listen( port, () => {
	console.log( `   Listening on http://localhost:${ port }` );
} );