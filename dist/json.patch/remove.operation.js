"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOperation = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const json_operation_1 = require("./json.operation");
class RemoveOperation extends json_operation_1.JsonOperation {
    constructor(path) {
        super('remove', path);
    }
    apply(value) {
        return value;
    }
}
exports.RemoveOperation = RemoveOperation;
