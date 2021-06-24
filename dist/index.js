"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const app_1 = tslib_1.__importDefault(require("./app"));
// initialize configuration
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
mongoose_1.default.connect('mongodb://localhost:27017/model-services', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}, () => {
    console.log('connected to database');
});
app_1.default.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
