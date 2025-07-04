import { MongoClient } from "mongodb";

const mongoURI =
  process.env.mongoURI ||
  "mongodb://gen_user:0c~-_tyjvTI(2v@176.57.214.176:27017/todomaster?authSource=admin&directConnection=true";

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
