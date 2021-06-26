import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import routes from './routes/index';
import errorMiddleware from './middlewares/error.middleware';

const app = express();
app.use(json());
app.use(cors());

// create application/json parser
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Configure routes
app.use('/api/', routes);

app.use(errorMiddleware);

export default app;
