"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonOperation = exports.OperationEnum = void 0;
/* eslint-disable no-unused-vars */
var OperationEnum;
(function (OperationEnum) {
    OperationEnum["add"] = "add";
    OperationEnum["remove"] = "remove";
    OperationEnum["replace"] = "replace";
})(OperationEnum = exports.OperationEnum || (exports.OperationEnum = {}));
// export const OperationType = OperationEnum.add | OperationEnum.remove | OperationEnum.replace;
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
