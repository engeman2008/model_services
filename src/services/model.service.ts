import { Model, PrismaClient } from '@prisma/client';
import { CreateModelDto } from '../dtos/CreateModelDto';
import HttpException from '../exceptions/HttpException';

class UserService {
  private prisma = new PrismaClient()

  public async findAllModels(): Promise<Model[]> {
    const allModels = await this.prisma.model.findMany({
      include: {
        entities: true,
        associations: true,
      },
    });
    return allModels;
  }

  public async findModelById(modelId: number): Promise<Model> {
    const model = await this.prisma.model.findUnique({
      where: { id: Number(modelId) },
      include: {
        entities: true,
        associations: true,
      },
    });
    if (!model) throw new HttpException(404, `Model with id ${modelId} not found`);
    return model;
  }

  public async createModel(modelData: CreateModelDto): Promise<Model> {
    // if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
    const { name } = modelData;

    const createModelData: Model = await this.prisma.model.create({
      data: {
        name,
      },
    });
    return createModelData;
  }
}
export default UserService;
