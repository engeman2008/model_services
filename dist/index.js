"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable no-underscore-dangle */
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const body_parser_1 = require("body-parser");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const routes = tslib_1.__importStar(require("./routes/index"));
const error_middleware_1 = tslib_1.__importDefault(require("./middlewares/error.middleware"));
// initialize configuration
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = express_1.default();
app.use(body_parser_1.json());
// create application/json parser
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
// Configure routes
routes.register(app);
app.use(error_middleware_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/model-services', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}, () => {
    console.log('connected to database');
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
