import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_USER, DB_PASSWORD, DB_TEST_NAME, NODE_ENV } from "../config.js";

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME;  //Escogiendo nuestra conexion con la base de datos de test
// ? es un if y : un else.

const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, { // sesta linea genera mi conexion con la base de datos.sequelize nos hace la traduccion de js a sql
  host: 'localhost',                                                //nre Sequelize es una instancia de la programacion orientada a objetos
  dialect: "mysql"
});

export default connection_db;