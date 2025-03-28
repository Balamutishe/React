require("dotenv").config();
const { MongoClient } = require("mongodb");

const clientPromise = MongoClient.connect(process.env.DB_URI, {
  maxPoolSize: 10,
});

const fetchDb = async (req, res, next, dbName) => {
  try {
    const client = await clientPromise;
    req.db = client.db(dbName);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = fetchDb;
