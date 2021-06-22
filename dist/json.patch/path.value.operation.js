"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathValueOperation = void 0;
const json_operation_1 = require("./json.operation");
class PathValueOperation extends json_operation_1.JsonOperation {
    constructor(op, path, value) {
        super(op, path);
        this.value = value;
    }
    getValue() {
        return this.value; // deep copy it
    }
}
exports.PathValueOperation = PathValueOperation;
