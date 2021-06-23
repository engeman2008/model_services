import * as express from 'express';

import ModelController from '../controllers/model.controller';

export const register = (app: express.Application) => {
  const modelController = new ModelController();

  // Get a model as JSON
  app.get('/model/:modelId', modelController.getModelById);

  // Creates a model by sending it's JSON and returns the id
  app.post('/create-model', modelController.createModel);
  // app.post('/create-model', modelController.createModel);

  // Accepts changes to the model via 'deltas')
  app.post('/model/:modelId/deltas', modelController.modelDeltas);
};
