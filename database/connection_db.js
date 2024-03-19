import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_USER, DB_PASSWORD, DB_TEST_NAME, NODE_ENV } from "../config.js";

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME; // Si esta condición es verdadera es lo que hay antes de la ? y lo que hay después es si es falso.
// Esta función conecta al workbench de sql y conecta mi base de datos.Esta sintaxis es de sequalize.

const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {    //new sequalize es una instancia y es de POO
  host: 'localhost',
  dialect: "mysql"
});

export default connection_db;