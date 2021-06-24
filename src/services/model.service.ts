/* eslint-disable class-methods-use-this */
import HttpException from '../exceptions/HttpException';
import { MyModelDoc } from '../mongoose/model';

import { MyModel } from '../mongoose/schema';

class ModelService {
  public async findModelById(modelId: string): Promise<any> {
    const myModel = await MyModel.findById(modelId, (err: any, data: any) => {
      if (err) { throw new HttpException(404, err); }
    });
    if (!myModel) { throw new HttpException(404, `Model with id ${modelId} not found`); }

    return myModel;
  }

  public async createModel(modelData: any): Promise<MyModelDoc> {
    try {
      const myModel = new MyModel(modelData);
      await myModel.save((err: any, data: any) => {
        if (err) {
          throw new HttpException(404, err);
        }
      });
      return myModel;
    } catch (error) {
      throw new HttpException(422, 'Failed to create');
    }
  }

  public async updateModel(modelId: string, modelData: any) {
    await this.findModelById(modelId);

    try {
      const myModel = new MyModel(modelData);
      await myModel.save((err: any, data: any) => {
        if (err) {
          throw new HttpException(404, err);
        }
        return data;
      });
      return myModel;
    } catch (error) {
      throw new HttpException(422, 'Failed to update');
    }
  }

  private async doesModelExists(modelId: string) {
    await MyModel.findById(modelId, (err: any, data: any) => {
      if (err) return false;
      return data;
    });
  }
}
export default ModelService;
