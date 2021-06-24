/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import supertest from 'supertest';

import { MyModel } from '../mongoose/schema';
import { newModelData } from './new-model.json';

console.log(newModelData);
const express = require('express');

const app = express();

beforeAll(async () => {
  const url = 'mongodb://127.0.0.1/test';
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
});

// Cleans up database between each test
afterEach(async () => {
  await MyModel.deleteMany();
});

afterAll(async () => {
  // Removes the User collection
  await MyModel.deleteMany();
  await mongoose.connection.close();
});

describe('[POST] /create-model', () => {
  it('response statusCode 200', async () => supertest(app)
    .post('/create-model')
    .send(newModelData)
    .expect('Content-Type', /json/)
    .expect(200));
});
