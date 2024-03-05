import connection_db from "./database/connection_db.js";
import SculptureModel from "./models/SculptureModel.js";
import express from "express";
import {DB_PORT} from "./config.js"

const app = express();

app.get('/', (req,res) => {
  res.send('Hola, soy una API')
})


async function main(){
try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.🚀🚀🚀');

    await SculptureModel.sync({force: true});
    console.log('The model has been synchronized succesfully 🚀')

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();

app.listen(DB_PORT, () =>{
  console.log(`Escuchando en el puerto ${DB_PORT}`)
});