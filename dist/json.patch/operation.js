"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonOperation = void 0;
class JsonOperation {
    constructor(op, path) {
        this.op = op;
        this.path = path;
    }
    getOp() {
        return this.op;
    }
    getPath() {
        return this.path;
    }
}
exports.JsonOperation = JsonOperation;
