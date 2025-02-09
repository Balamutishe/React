require("dotenv").config();

module.exports = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
