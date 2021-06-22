"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelDeltasDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class ModelDeltasDto {
    constructor() {
        this.patch = '';
    }
}
tslib_1.__decorate([
    class_validator_1.IsJSON(),
    tslib_1.__metadata("design:type", String)
], ModelDeltasDto.prototype, "patch", void 0);
exports.ModelDeltasDto = ModelDeltasDto;
