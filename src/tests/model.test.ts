/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import supertest from 'supertest';

import { MyModel } from '../mongoose/schema';
import { newModelData, deltas } from './test-data';

import app from '../app';

const request = supertest(app);

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

describe('[POST] /api/create-model', () => {
  it('response statusCode 201', async () => {
    const res = await request
      .post('/api/create-model')
      .set('Accept', 'application/json')
      .send(newModelData);

    expect(res.status).toBe(201);
    expect(res.body.data.entities.length).toBe(3);
    expect(res.body.data.associations.length).toBe(2);
  });
});

describe('[GET] /api/model/:modelId', () => {
  it('response statusCode 200', async () => {
    const model = new MyModel(newModelData);
    await model.save();
    const res = await request
      .get(`/api/model/${model._id}`)
      .set('Accept', 'application/json');

    expect(res.status).toBe(200);
  });
});

describe('[GET] /api/model/:modelId', () => {
  it('response statusCode 404 if not found', async () => {
    await request
      .get('/api/model/24245')
      .set('Accept', 'application/json')
      .expect(404, { message: 'Model with id 24245 not found' });
  });
});

describe('[POST] /api/model/:modelId/deltas', () => {
  it('response statusCode 200 if ok', async () => {
    const model = new MyModel(newModelData);
    await model.save();

    const res = await request
      .post(`/api/model/${model._id}/deltas`)
      .set('Accept', 'application/json')
      .send(deltas);

    expect(res.status).toBe(200);
    expect(res.body.data.entities.length).toBe(4);
    expect(res.body.data.entities[1].attributes[0].name).toBe('not name');
  });
});
