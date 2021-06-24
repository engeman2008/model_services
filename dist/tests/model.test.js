"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable import/no-extraneous-dependencies */
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const schema_1 = require("../mongoose/schema");
const new_model_json_1 = require("./new-model.json");
console.log(new_model_json_1.newModelData);
const express = require('express');
const app = express();
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
describe('[POST] /create-model', () => {
    it('response statusCode 200', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        return supertest_1.default(app)
            .post('/create-model')
            .send(new_model_json_1.newModelData)
            .expect('Content-Type', /json/)
            .expect(200);
    }));
});
