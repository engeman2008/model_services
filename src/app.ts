/* eslint-disable no-underscore-dangle */
import express from 'express';
import { json } from 'body-parser';
import routes from './routes/index';
import errorMiddleware from './middlewares/error.middleware';

const app = express();
app.use(json());

// create application/json parser
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Configure routes
app.use('/', routes);

app.use(errorMiddleware);

export default app;
