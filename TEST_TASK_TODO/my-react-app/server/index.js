import express, { json } from "express";
import cookieParser from "cookie-parser";
import users from "./routes/users.js";
import auth from "./routes/auth.js";

const app = express();

app.use(json());
app.use(cookieParser());

app.use("/users", users);
app.use("/", auth);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});
