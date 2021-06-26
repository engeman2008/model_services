"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable class-methods-use-this */
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const schema_1 = require("../mongoose/schema");
class ModelService {
    findModelById(modelId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const myModel = yield schema_1.MyModel.findById(modelId);
                if (!myModel)
                    throw new HttpException_1.default(404, `Model with id ${modelId} not found`);
                return myModel;
            }
            catch (error) {
                throw new HttpException_1.default(404, `Model with id ${modelId} not found`);
            }
        });
    }
    createModel(modelData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const myModel = new schema_1.MyModel(modelData);
                yield myModel.validate();
                yield myModel.save();
                return myModel;
            }
            catch (error) {
                if (error.name === 'ValidationError') {
                    const errors = {};
                    Object.keys(error.errors).forEach((key) => {
                        errors[key] = error.errors[key].message;
                    });
                    throw new HttpException_1.default(400, errors);
                }
                throw new HttpException_1.default(422, 'Failed to create');
            }
        });
    }
    updateModel(modelId, modelData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const doc = yield this.findModelById(modelId);
            try {
                doc.overwrite(modelData);
                yield doc.save((err, data) => {
                    if (err) {
                        throw new HttpException_1.default(404, err);
                    }
                    return data;
                });
                return doc;
            }
            catch (error) {
                throw new HttpException_1.default(422, 'Failed to update');
            }
        });
    }
}
exports.default = ModelService;
