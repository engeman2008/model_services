"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOperation = void 0;
const tslib_1 = require("tslib");
const pointer = tslib_1.__importStar(require("json-pointer"));
const json_operation_1 = require("./json.operation");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
class RemoveOperation extends json_operation_1.JsonOperation {
    constructor(path) {
        super('remove', path);
    }
    apply(input) {
        // if path not exists in the document
        if (!pointer.has(input, this.path))
            throw new HttpException_1.default(404, `No such path ${this.path}`);
        const document = pointer.get(input, this.path);
        // if is array the removed path , then put it to []
        if (Array.isArray(document)) {
            pointer.set(input, this.path, undefined);
        }
        pointer.remove(input, this.path);
        return input;
    }
}
exports.RemoveOperation = RemoveOperation;
