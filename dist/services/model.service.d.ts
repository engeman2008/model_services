import { ICreateModelInput } from '../interfaces/model-input.interface';
import { IModel } from '../mongoose/model';
declare class ModelService {
    findModelById(modelId: string): Promise<any>;
    createModel(modelData: ICreateModelInput): Promise<IModel>;
    updateModel(modelId: string, modelData: any): Promise<IModel>;
}
export default ModelService;
