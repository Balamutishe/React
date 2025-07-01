import { MongoClient } from "mongodb";

const mongoURI =
  process.env.mongoURI ||
  "mongodb://gen_user:0c~-_tyjvTI(2v@176.57.214.176:27017/todomaster?authSource=admin&directConnection=true";

export const clientPromise = MongoClient.connect(mongoURI, {
  maxPoolSize: 10,
});
