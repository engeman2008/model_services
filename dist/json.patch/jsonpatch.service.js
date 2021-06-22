"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_operation_1 = require("./add.operation");
const remove_operation_1 = require("./remove.operation");
const replace_operation_1 = require("./replace.operation");
// eslint-disable-next-line no-unused-vars
class JsonPatchService {
    constructor(model, patch) {
        this.patchOperations = [];
        this.model = model;
        this.patch = patch;
    }
    // private operations : []; // list of operation
    apply() {
        // validate the patch
        // loop through each line and for each line apply the operation
        console.log(this.patch);
        this.patchOperations = this.patch.map((record) => {
            var _a, _b;
            switch (record.op) {
                case "add" /* add */:
                    return new add_operation_1.AddOperation(record.path, (_a = record.value) !== null && _a !== void 0 ? _a : '');
                case "replace" /* replace */:
                    return new replace_operation_1.ReplaceOperation(record.path, (_b = record.value) !== null && _b !== void 0 ? _b : '');
                case "remove" /* remove */:
                    return new remove_operation_1.RemoveOperation(record.path);
                default:
                    return null;
            }
        });
        console.log(this.patchOperations);
        // for each operation in this.operations
        // this.operations.apply;
        return this.patch;
    }
    /**
     * setModel
     */
    setModel(model) {
        this.setModel(model);
    }
    setPatch(patch) {
        this.setPatch(patch);
    }
}
exports.default = JsonPatchService;
