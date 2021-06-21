"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable no-underscore-dangle */
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const routes = tslib_1.__importStar(require("./routes/index"));
// initialize configuration
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = express_1.default();
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
