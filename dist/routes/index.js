"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const tslib_1 = require("tslib");
const validation_middleware_1 = tslib_1.__importDefault(require("../middlewares/validation.middleware"));
const model_controller_1 = tslib_1.__importDefault(require("../controllers/model.controller"));
const CreateModelDto_1 = require("../dtos/CreateModelDto");
const register = (app) => {
    const modelController = new model_controller_1.default();
    // Get a model as JSON
    app.get('/model/:modelId(\\d+)', modelController.getModelById);
    // Creates a model by sending it's JSON and returns the id
    app.post('/create-model', validation_middleware_1.default(CreateModelDto_1.CreateModelDto), modelController.createModel);
    // app.post('/create-model', modelController.createModel);
    // Accepts changes to the model via 'deltas')
    app.post('/model/:modelId(\\d+)/deltas', modelController.modelDeltas);
};
exports.register = register;
