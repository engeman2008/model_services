/* eslint-disable no-unused-vars */
import { Model } from '@prisma/client'; // to be of mine
import { NextFunction, Request, Response } from 'express';
import { CreateModelDto } from '../dtos/CreateModelDto';
import JsonPatchService from '../json.patch/jsonpatch.service';
import ModelService from '../services/model.service';

class ModelController {
  public modelService = new ModelService();

  public getModelById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const modelId = Number(req.params.modelId);
      const model: Model = await this.modelService.findModelById(modelId);
      res.status(200).json({ data: model });
    } catch (error) {
      next(error);
    }
  }

  public createModel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const modelData: CreateModelDto = req.body;
      const createModelData: Model = await this.modelService.createModel(modelData);

      res.status(201).json({ data: createModelData, message: 'created' });
    } catch (error) {
      next(error);
    }
  }

  public modelDeltas = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const modelId = Number(req.params.modelId);
      const model: Model = await this.modelService.findModelById(modelId);

      const jsonPatch = req.body;
      console.log(jsonPatch[0].op);
      const jsonPatchService = new JsonPatchService(model, jsonPatch);
      jsonPatchService.apply();

      res.status(200).json({ data: model });
    } catch (error) {
      next(error);
    }
  }
}
export default ModelController;
