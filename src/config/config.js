import dotenv from "dotenv";

const config = {};

const environment = "deveplopment"; // change environment to 'production', 'development'or 'testing'.

dotenv.config({
  path:
    environment === "deveplopment"
      ? ".env.development"
      : environment === "testing"
      ? ".env.testing"
      : ".env.production",
});

config.environment = {
  env: process.env.NODE_ENV,
};

config.url = {
  baseUrl: process.env.BASE_URL,
};

config.sever = {
  port: process.env.PORT,
};

config.db = {
  cs: process.env.MONGO_URI,
  dbUser: process.env.MONGO_USER,
  dbPass: process.env.MONGO_PASS,
  dbName: process.env.DB_NAME,
};

// console.log("config.js: ", config);

export default config;
