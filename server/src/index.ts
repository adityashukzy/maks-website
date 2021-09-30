import express from 'express';
require('./db/mongoose');
import userRouter from './routers/user';
import dotenv from 'dotenv';
import cors from 'cors';

const port = process.env.PORT || 5000;

dotenv.config();

async function startServer() {
  const app = express();

  app.use(cors());
  app.all('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  });

  app.use(express.json());
  app.use(userRouter);

  app.listen(port, () => {
    console.log('Server is up on port ' + port);
  });
}

startServer();
