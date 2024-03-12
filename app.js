import connection_db from "./database/connection_db.js";
import SculptureModel from "./models/SculptureModel.js";
import express from "express";
import {DB_PORT} from "./config.js"
import SculptureRouter from "./routes/SculptureRouter.js";
import chalk from "chalk";

const app = express();

app.use(express.json()); // para que la aplicacion pueda soportar formato json desde postman (Middleware para parsear el cuerpo de las solicitudes en formato JSON)

app.use("/api", SculptureRouter)

try {
    await connection_db.authenticate();
    console.log(chalk.blueBright('Connection has been established successfully.🚀🚀🚀'));

    await SculptureModel.sync();
    console.log(chalk.greenBright('The model has been synchronized succesfully 👩🏼‍💻'))

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.listen(DB_PORT, () =>{
  console.log(chalk.bgMagenta.bold(`Server up in  http://localhost:${DB_PORT}/api`))
});

export default app;

