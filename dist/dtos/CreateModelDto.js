"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModelDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateModelDto {
    constructor() {
        this.name = '';
    }
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    tslib_1.__metadata("design:type", String)
], CreateModelDto.prototype, "name", void 0);
exports.CreateModelDto = CreateModelDto;
