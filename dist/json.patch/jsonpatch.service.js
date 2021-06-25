"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const model_service_1 = tslib_1.__importDefault(require("../services/model.service"));
const add_operation_1 = require("./add.operation");
const json_operation_1 = require("./json.operation");
const remove_operation_1 = require("./remove.operation");
const replace_operation_1 = require("./replace.operation");
const validation_1 = require("./validation");
class JsonPatchService {
    constructor(model, patch) {
        this.addOperations = [];
        this.removeOperations = [];
        this.replaceOperations = [];
        this.valdiation = new validation_1.Validation();
        this.modelService = new model_service_1.default();
        this.model = model;
        this.patch = patch;
    }
    apply() {
        this.valdiation.validate(this.patch);
        this.mapToOperations();
        // apply replace then remove then add
        this.replaceOperations.forEach((operation) => {
            this.model = operation === null || operation === void 0 ? void 0 : operation.apply(this.model);
        });
        this.removeOperations.forEach((operation) => {
            this.model = operation === null || operation === void 0 ? void 0 : operation.apply(this.model);
        });
        this.addOperations.forEach((operation) => {
            this.model = operation === null || operation === void 0 ? void 0 : operation.apply(this.model);
        });
        return this.model;
    }
    mapToOperations() {
        this.patch.forEach((record) => {
            switch (record.op) {
                case json_operation_1.OperationEnum.add:
                    this.addOperations.push(new add_operation_1.AddOperation(record.path, record.value));
                    break;
                case json_operation_1.OperationEnum.replace:
                    this.replaceOperations.push(new replace_operation_1.ReplaceOperation(record.path, record.value));
                    break;
                case json_operation_1.OperationEnum.remove:
                    this.removeOperations.push(new remove_operation_1.RemoveOperation(record.path));
                    break;
                default:
                    break;
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
