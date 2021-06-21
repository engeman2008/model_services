import { NextFunction, Request, Response } from 'express';
import ModelService from '../services/model.service';
declare class ModelController {
    modelService: ModelService;
    getModelById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createModel: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    modelDeltas: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default ModelController;
