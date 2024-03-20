import connection_db from "./database/connection_db.js";
import SculptureModel from "./models/SculptureModel.js";
import express from 'express';
import { PORT } from './config.js';
import SculptureRouter from './routes/SculptureRouter.js';
import chalk from "chalk";

const app = express(); //esto es indispensable

app.use(express.json()); //para q la app soporte formato json()

app.use('/api', SculptureRouter)  //primero la ruta y segundo el enrutado q va a tener

try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.🚀🚀🚀');

    await SculptureModel.sync();
    console.log('Sincronizada correctamente');

  } catch (error) {
    console.error(chalk.magenta('Unable to connect to the database:', error));
  }

  app.listen(PORT, () => {
    console.log(chalk.bgGreen(`La API se esta escuchando en el puerto http://localhost:${PORT}`)); //esto es indispensable
});

export default app;