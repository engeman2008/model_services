"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathValueOperation = void 0;
const utils_1 = require("../utils/utils");
const json_operation_1 = require("./json.operation");
class PathValueOperation extends json_operation_1.JsonOperation {
    constructor(op, path, value) {
        super(op, path);
        this.value = utils_1.deepCopy(value);
    }
    getValue() {
        return utils_1.deepCopy(this.value);
    }
}
exports.PathValueOperation = PathValueOperation;
