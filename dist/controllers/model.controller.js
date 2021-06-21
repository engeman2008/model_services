"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const model_service_1 = tslib_1.__importDefault(require("../services/model.service"));
class ModelController {
    constructor() {
        this.modelService = new model_service_1.default();
        this.getModelById = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.modelService.findAllModels();
                res.status(200).json({ data: result, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        });
        this.createModel = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const modelData = req.body;
                const createModelData = yield this.modelService.createModel(modelData);
                res.status(201).json({ data: createModelData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        });
        this.modelDeltas = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            res.send('Well done3!');
        });
    }
}
exports.default = ModelController;
