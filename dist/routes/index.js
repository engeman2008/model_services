"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const tslib_1 = require("tslib");
const model_controller_1 = tslib_1.__importDefault(require("../controllers/model.controller"));
const register = (app) => {
    const modelController = new model_controller_1.default();
    // Get a model as JSON
    app.get('/model/:modelId', modelController.getModelById);
    // Creates a model by sending it's JSON and returns the id
    app.post('/create-model', modelController.createModel);
    // app.post('/create-model', modelController.createModel);
    // Accepts changes to the model via 'deltas')
    app.post('/model/:modelId/deltas', modelController.modelDeltas);
};
exports.register = register;
