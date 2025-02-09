const express = require("express");
const cookieParser = require("cookie-parser");
const users = require("./routes/users.js");
const notes = require("./routes/notes.js");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/", users, notes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`   Listening on http://localhost:${port}`);
});
