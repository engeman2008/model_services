"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    findAllModels() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const allModels = yield this.prisma.model.findMany({
                include: {
                    entities: true,
                    associations: true,
                },
            });
            return allModels;
        });
    }
    findModelById(modelId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const model = yield this.prisma.model.findUnique({
                where: { id: Number(modelId) },
                include: {
                    entities: true,
                    associations: true,
                },
            });
            if (!model)
                throw new HttpException_1.default(404, `Model with id ${modelId} not found`);
            return model;
        });
    }
    createModel(modelData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
            const { name } = modelData;
            const createModelData = yield this.prisma.model.create({
                data: {
                    name,
                },
            });
            return createModelData;
        });
    }
}
exports.default = UserService;
