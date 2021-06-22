"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOperation = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const path_value_operation_1 = require("./path.value.operation");
class AddOperation extends path_value_operation_1.PathValueOperation {
    constructor(path, value) {
        super('add', path, value);
    }
    apply() {
        return this.value;
    }
}
exports.AddOperation = AddOperation;
