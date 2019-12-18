require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_RED_URL",
    dialect: "mysql"
  }
};
