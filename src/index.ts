/* eslint-disable no-underscore-dangle */
import express from 'express';
import dotenv from 'dotenv';
import * as routes from './routes/index';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure routes
routes.register(app);
// app._router.stack.forEach((r: any) => {
//   if (r.route && r.route.path) {
//     console.log(r.route.path);
//   }
// });
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
