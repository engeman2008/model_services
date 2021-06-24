/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import JsonPatchService from '../json.patch/jsonpatch.service';
import { MyModelDoc } from '../mongoose/model';
import ModelService from '../services/model.service';

class ModelController {
  public modelService = new ModelService();

  public getModelById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { modelId } = req.params;
      const model: any = await this.modelService.findModelById(modelId);
      res.status(200).json({ data: model });
    } catch (error) {
      next(error);
    }
  }

  public createModel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const modelData = req.body;
      const result: MyModelDoc = await this.modelService.createModel(modelData);
      res.status(201).json({ data: result, message: 'created' });
    } catch (error) {
      next(error);
    }
  }

  public modelDeltas = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { modelId } = req.params;
      const model: any = await this.modelService.findModelById(modelId);
      console.log(model);
      const jsonPatch = req.body;
      const jsonPatchService = new JsonPatchService(model, jsonPatch);
      const result = jsonPatchService.apply();
      // console.log(result);

      this.modelService.updateModel(modelId, result);

      res.status(200).json({ data: model });
    } catch (error) {
      next(error);
    }
  }
}
export default ModelController;
