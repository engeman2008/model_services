"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOperation = void 0;
const tslib_1 = require("tslib");
const pointer = tslib_1.__importStar(require("json-pointer"));
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const path_value_operation_1 = require("./path.value.operation");
class AddOperation extends path_value_operation_1.PathValueOperation {
    constructor(path, value) {
        super('add', path, value);
    }
    apply(input) {
        // if path not exists in the document
        if (!pointer.has(input, this.path))
            throw new HttpException_1.default(404, `No such path ${this.path}`);
        let document = pointer.get(input, this.path);
        if (document == null) {
            document = this.value;
        }
        else if (Array.isArray(this.value)) {
            this.value.forEach((record) => document.push(record));
        }
        else {
            document.push(this.value);
        }
        pointer.set(input, this.path, document);
        return input;
    }
}
exports.AddOperation = AddOperation;
