"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceOperation = void 0;
/* eslint-disable no-unused-vars */
const path_value_operation_1 = require("./path.value.operation");
class ReplaceOperation extends path_value_operation_1.PathValueOperation {
    constructor(path, value) {
        super('replace', path, value);
    }
    apply() {
        this.path = 'Replace';
    }
}
exports.ReplaceOperation = ReplaceOperation;
