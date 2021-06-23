"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const tslib_1 = require("tslib");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const json_operation_1 = require("./json.operation");
class Validation {
    constructor() {
        this.patch = [];
        this.errorMessages = [];
    }
    validate(patch) {
        this.patch = patch;
        this.validateOp();
    }
    validateOp() {
        this.patch.forEach((record) => {
            const isOpSupported = this.doesOperationSupported(record);
            if (!isOpSupported) {
                this.errorMessages.push(`Operation ${record.op} not supported`);
            }
        });
        if (this.errorMessages.length !== 0)
            throw new HttpException_1.default(400, this.errorMessages.join(', '));
    }
    // eslint-disable-next-line class-methods-use-this
    doesOperationSupported(record) {
        if (record.op in json_operation_1.OperationEnum)
            return true;
        return false;
    }
}
exports.Validation = Validation;
