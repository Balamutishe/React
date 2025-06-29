import { MongoClient } from "mongodb";

export const clientPromise = MongoClient.connect(
  "mongodb://gen_user:0c~-_tyjvTI(2v@176.57.214.176:27017/todomaster?authSource=admin&directConnection=true",
  { maxPoolSize: 10, forceServerObjectId: false }
);
