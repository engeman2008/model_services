/* eslint-disable no-unused-vars */
import { Model } from '@prisma/client'; // to be of mine
import { NextFunction, Request, Response } from 'express';
import { CreateModelDto } from '../dtos/CreateModelDto';
import ModelService from '../services/model.service';

class ModelController {
  public modelService = new ModelService();

  public getModelById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result: Model[] = await this.modelService.findAllModels();
      res.status(200).json({ data: result, message: 'findAll' });
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
    res.send('Well done3!');
  }
}
export default ModelController;
