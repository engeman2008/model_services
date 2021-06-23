"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_operation_1 = require("./add.operation");
const json_operation_1 = require("./json.operation");
const remove_operation_1 = require("./remove.operation");
const replace_operation_1 = require("./replace.operation");
const validation_1 = require("./validation");
// eslint-disable-next-line no-unused-vars
class JsonPatchService {
    constructor(model, patch) {
        this.patchOperations = [];
        this.valdiation = new validation_1.Validation();
        this.model = model;
        this.patch = patch;
    }
    apply() {
        this.valdiation.validate(this.patch);
        this.mapOperations();
        this.patchOperations.forEach((operation) => {
            operation === null || operation === void 0 ? void 0 : operation.apply(this.model); // apply operation on the model and return the model
        });
        // this.operations.apply;
        return this.patch;
    }
    mapOperations() {
        this.patchOperations = this.patch.map((record) => {
            var _a, _b;
            switch (record.op) {
                case json_operation_1.OperationEnum.add:
                    return new add_operation_1.AddOperation(record.path, (_a = record.value) !== null && _a !== void 0 ? _a : '');
                case json_operation_1.OperationEnum.replace:
                    return new replace_operation_1.ReplaceOperation(record.path, (_b = record.value) !== null && _b !== void 0 ? _b : '');
                case json_operation_1.OperationEnum.remove:
                    return new remove_operation_1.RemoveOperation(record.path);
                default:
                    return null;
            }
        });
    }
    setModel(model) {
        this.setModel(model);
    }
    setPatch(patch) {
        this.setPatch(patch);
    }
}
exports.default = JsonPatchService;
