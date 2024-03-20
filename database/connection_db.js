import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_TEST_NAME, DB_USER, DB_PASSWORD, NODE_ENV } from "../config.js";

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME;

const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: "mysql"
});

export default connection_db;

