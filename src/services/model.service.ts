/* eslint-disable class-methods-use-this */
import HttpException from '../exceptions/HttpException';
import { IModel } from '../mongoose/model';
import { MyModel } from '../mongoose/schema';

class ModelService {
  public async findModelById(modelId: string): Promise<any> {
    try {
      const myModel = await MyModel.findById(modelId);
      if (!myModel) throw new HttpException(404, `Model with id ${modelId} not found`);
      return myModel;
    } catch (error) {
      throw new HttpException(404, `Model with id ${modelId} not found`);
    }
  }

  public async createModel(modelData: any): Promise<IModel> {
    try {
      const myModel = new MyModel(modelData);
      await myModel.validate();
      await myModel.save();
      return myModel;
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errors: any = {};
        Object.keys(error.errors).forEach((key) => {
          errors[key] = error.errors[key].message;
        });
        throw new HttpException(400, errors);
      }
      throw new HttpException(422, 'Failed to create');
    }
  }

  public async updateModel(modelId: string, modelData: any) {
    const doc = await this.findModelById(modelId);

    try {
      doc.overwrite(modelData);
      await doc.save((err: any, data: any) => {
        if (err) {
          throw new HttpException(404, err);
        }
        return data;
      });
      return doc;
    } catch (error) {
      throw new HttpException(422, 'Failed to update');
    }
  }
}
export default ModelService;
