"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceOperation = void 0;
const tslib_1 = require("tslib");
const pointer = tslib_1.__importStar(require("json-pointer"));
const path_value_operation_1 = require("./path.value.operation");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
class ReplaceOperation extends path_value_operation_1.PathValueOperation {
    constructor(path, value) {
        super('replace', path, value);
    }
    apply(input) {
        // if path not exists in the document
        if (!pointer.has(input, this.path))
            throw new HttpException_1.default(404, `No such path ${this.path}`);
        pointer.set(input, this.path, this.value);
        return input;
    }
}
exports.ReplaceOperation = ReplaceOperation;
