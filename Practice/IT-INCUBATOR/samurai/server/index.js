const express = require("express");
const cookieParser = require("cookie-parser");
const chats = require("./routes/chats.js");
const users = require("./routes/users.js");
const messages = require("./routes/messages.js");
const posts = require("./routes/posts.js");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/", users, chats, messages, posts);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`   Listening on http://localhost:${ port }`);
});