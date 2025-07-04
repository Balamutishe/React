import { app } from "./app";
import { startDb } from "./db/mongoClient";

const port = process.env.PORT || 3000;

const startApp = async () => {
  await startDb();
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

startApp();
