"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const model_controller_1 = tslib_1.__importDefault(require("../controllers/model.controller"));
const router = express_1.Router();
// export const register = (app: express.Application) => {
const modelController = new model_controller_1.default();
// Get a model as JSON
router.get('/model/:modelId', modelController.getModelById);
// Creates a model by sending it's JSON and returns the id
router.post('/create-model', modelController.createModel);
// app.post('/create-model', modelController.createModel);
// Accepts changes to the model via 'deltas')
router.post('/model/:modelId/deltas', modelController.modelDeltas);
exports.default = router;
