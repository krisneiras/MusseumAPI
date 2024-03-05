import connection_db from "./database/connection_db.js";
import SculptureModel from "./models/SculptureModel.js";

async function main(){
try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.🚀🚀🚀');

    await SculptureModel.sync({force: true});
    console.log('Se creo la tabla sculptures 🚀')

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();