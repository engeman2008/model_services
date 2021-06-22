"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonpatch_service_1 = tslib_1.__importDefault(require("../json.patch/jsonpatch.service"));
const model_service_1 = tslib_1.__importDefault(require("../services/model.service"));
class ModelController {
    constructor() {
        this.modelService = new model_service_1.default();
        this.getModelById = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const modelId = Number(req.params.modelId);
                const model = yield this.modelService.findModelById(modelId);
                res.status(200).json({ data: model });
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
            try {
                const modelId = Number(req.params.modelId);
                const model = yield this.modelService.findModelById(modelId);
                const jsonPatch = req.body;
                console.log(jsonPatch[0].op);
                const jsonPatchService = new jsonpatch_service_1.default(model, jsonPatch);
                jsonPatchService.apply();
                res.status(200).json({ data: model });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = ModelController;
