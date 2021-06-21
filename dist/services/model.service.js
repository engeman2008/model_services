"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
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
