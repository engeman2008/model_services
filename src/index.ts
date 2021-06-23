/* eslint-disable no-underscore-dangle */
import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import dotenv from 'dotenv';
import * as routes from './routes/index';
import errorMiddleware from './middlewares/error.middleware';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();
app.use(json());

// create application/json parser
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Configure routes
routes.register(app);

app.use(errorMiddleware);

mongoose.connect('mongodb://localhost:27017/model-services', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, () => {
  console.log('connected to database');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
