import { Router } from 'express';
import ModelController from '../controllers/model.controller';

const router = Router();

// export const register = (app: express.Application) => {
const modelController = new ModelController();

// Get a model as JSON
router.get('/model/:modelId', modelController.getModelById);

// Creates a model by sending it's JSON and returns the id
router.post('/create-model', modelController.createModel);
// app.post('/create-model', modelController.createModel);

// Accepts changes to the model via 'deltas')
router.post('/model/:modelId/deltas', modelController.modelDeltas);

export default router;
