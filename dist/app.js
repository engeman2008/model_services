"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = tslib_1.__importDefault(require("cors"));
const index_1 = tslib_1.__importDefault(require("./routes/index"));
const error_middleware_1 = tslib_1.__importDefault(require("./middlewares/error.middleware"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use(cors_1.default());
// create application/json parser
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
// Configure routes
app.use('/api/', index_1.default);
app.use(error_middleware_1.default);
exports.default = app;
