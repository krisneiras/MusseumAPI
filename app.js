import { PORT } from "./config.js";
import connection_db from "./database/connection_db.js";
import express from "express";
import SculptureRouter from "./routes/SculptureRouter.js";
import SculptureModel from "./models/SculptureModel.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", SculptureRouter)

try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully 🚀🚀🚀');
    await SculptureModel.sync();
    console.log('The model has been synchronized succesfully 🚀');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.listen(PORT, () => {
    console.log(`Server up in http://localhost:${PORT}/api`);
  });

  export default app;