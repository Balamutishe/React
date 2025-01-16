const express = require("express");
const cookieParser = require("cookie-parser");
const users = require("./routes/users.js");
const auth = require("./routes/auth.js");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/users", users);
app.use("/", auth);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});
