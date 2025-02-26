const express = require("express");
const boards = require("./routes/boards.js");
const notes = require("./routes/notes.js");

const app = express();
app.use(express.json());

app.use("/", boards, notes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`   Listening on http://localhost:${port}`);
});
