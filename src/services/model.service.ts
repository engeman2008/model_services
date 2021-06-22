import { Model, PrismaClient } from '@prisma/client';
import { CreateModelDto } from '../dtos/CreateModelDto';

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

  public async createModel(modelData: CreateModelDto): Promise<Model> {
    console.log(modelData);
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
