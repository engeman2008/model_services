import * as express from 'express';

import validationMiddleware from '../middlewares/validation.middleware';
import ModelController from '../controllers/model.controller';
import { CreateModelDto } from '../dtos/CreateModelDto';
import { ModelDeltasDto } from '../dtos/ModelDeltasDto';

export const register = (app: express.Application) => {
  const modelController = new ModelController();

  // Get a model as JSON
  app.get('/model/:modelId(\\d+)', modelController.getModelById);

  // Creates a model by sending it's JSON and returns the id
  app.post('/create-model', validationMiddleware(CreateModelDto), modelController.createModel);
  // app.post('/create-model', modelController.createModel);

  // Accepts changes to the model via 'deltas')
  app.post('/model/:modelId(\\d+)/deltas', validationMiddleware(ModelDeltasDto), modelController.modelDeltas);
};
