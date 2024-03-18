import express from 'express';
import { PORT } from './config.js';
import SculptureRouter from './routes/SculptureRouter.js';
import connection_db from './database/connection_db.js';
import Sculpture from './models/SculptureModel.js'

const app = express();

app.use(express.json());

app.use('/api', SculptureRouter);

  try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully 🚀');

    await Sculpture.sync();
    console.log('Sincronizada correctamente');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  };


app.listen(PORT, () => {
  console.log(`Server up at http://localhost:${PORT}/api`);
});

export default app;

