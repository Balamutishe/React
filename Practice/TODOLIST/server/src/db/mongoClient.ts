import { MongoClient } from "mongodb";
import { settings } from "../app/settings";

const mongoURI = settings.MONGO_URI;

export const client = new MongoClient(mongoURI, {
  maxPoolSize: 10,
});

export const startDb = async () => {
  try {
    await client.connect();
    await client.db().command({ ping: 1 });
    console.log("Connected successfully to mongo server");
  } catch (error) {
    console.log("Can't connect to database");
    await client.close();
  }
};
