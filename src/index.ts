import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

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
