"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable no-underscore-dangle */
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = require("body-parser");
const routes = tslib_1.__importStar(require("./routes/index"));
const error_middleware_1 = tslib_1.__importDefault(require("./middlewares/error.middleware"));
const app = express_1.default();
app.use(body_parser_1.json());
// create application/json parser
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
// Configure routes
routes.register(app);
app.get('/test', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'pass!' });
}));
app.use(error_middleware_1.default);
exports.default = app;
