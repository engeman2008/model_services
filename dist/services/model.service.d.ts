import { IModel } from '../mongoose/model';
declare class ModelService {
    findModelById(modelId: string): Promise<any>;
    createModel(modelData: any): Promise<IModel>;
    updateModel(modelId: string, modelData: any): Promise<any>;
}
export default ModelService;
