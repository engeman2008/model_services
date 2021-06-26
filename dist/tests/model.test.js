"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const schema_1 = require("../mongoose/schema");
const test_data_1 = require("./test-data");
const app_1 = tslib_1.__importDefault(require("../app"));
const request = supertest_1.default(app_1.default);
beforeAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = 'mongodb://127.0.0.1/test';
    yield mongoose_1.default.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
}));
// Cleans up database between each test
afterEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield schema_1.MyModel.deleteMany();
}));
afterAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // Removes the User collection
    yield schema_1.MyModel.deleteMany();
    yield mongoose_1.default.connection.close();
}));
describe('[POST] /api/create-model', () => {
    it('response statusCode 201', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .post('/api/create-model')
            .set('Accept', 'application/json')
            .send(test_data_1.newModelData);
        expect(res.status).toBe(201);
        expect(res.body.data.entities.length).toBe(3);
        expect(res.body.data.associations.length).toBe(2);
    }));
});
describe('[GET] /api/model/:modelId', () => {
    it('response statusCode 200', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const model = new schema_1.MyModel(test_data_1.newModelData);
        yield model.save();
        const res = yield request
            .get(`/api/model/${model._id}`)
            .set('Accept', 'application/json');
        expect(res.status).toBe(200);
    }));
});
describe('[GET] /api/model/:modelId', () => {
    it('response statusCode 404 if not found', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield request
            .get('/api/model/24245')
            .set('Accept', 'application/json')
            .expect(404, { message: 'Model with id 24245 not found' });
    }));
});
describe('[POST] /api/model/:modelId/deltas', () => {
    it('response statusCode 200 if ok', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const model = new schema_1.MyModel(test_data_1.newModelData);
        yield model.save();
        const res = yield request
            .post(`/api/model/${model._id}/deltas`)
            .set('Accept', 'application/json')
            .send(test_data_1.deltas);
        expect(res.status).toBe(200);
        expect(res.body.data.entities.length).toBe(4);
        expect(res.body.data.entities[1].attributes[0].name).toBe('not name');
    }));
});
