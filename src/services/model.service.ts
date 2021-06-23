/* eslint-disable class-methods-use-this */
import HttpException from '../exceptions/HttpException';
import { MyModelDoc } from '../mongoose/model';

import { MyModel } from '../mongoose/schema';

class ModelService {
  public async findModelById(modelId: string): Promise<any> {
    try {
      const myModel = await MyModel.findById(modelId);
      return myModel;
    } catch (error) {
      throw new HttpException(404, `Model with id ${modelId} not found`);
    }
  }

  public async createModel(modelData: any): Promise<MyModelDoc> {
    try {
      const myModel = new MyModel(modelData);
      await myModel.save();
      return myModel;
    } catch (error) {
      throw new HttpException(422, 'Failed to add');
    }
  }

  public async updateModel(modelId: string, modelData: any) {
    try {
      MyModel.findByIdAndUpdate(modelId, modelData, { new: true, upsert: true });
    } catch (error) {
      throw new HttpException(422, 'Failed to update');
    }
  }
}
export default ModelService;
