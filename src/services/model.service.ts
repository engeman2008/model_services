import {
  Association,
  Attribute, Entity, Model, PrismaClient,
} from '@prisma/client';
import { Model as ModelC } from '../models/model';
import { CreateModelDto } from '../dtos/CreateModelDto';
import HttpException from '../exceptions/HttpException';

class ModelService {
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
        entities: {
          include:
          {
            attributes: true,
          },
        },
        associations: true,
      },
    });
    if (!model) throw new HttpException(404, `Model with id ${modelId} not found`);
    return model;
  }

  public async createModel(modelData: CreateModelDto): Promise<Model> {
    const createModelData: Model = await this.prisma.model.create({
      data: {
        name: modelData.name,
      },
    });
    modelData.entities.forEach(async (record) => {
      const entity: Entity = await this.prisma.entity.create({
        data: {
          name: record.name,
          modelId: createModelData.id,
        },
      });
      record.attributes.forEach(async (row) => {
        await this.prisma.attribute.create({
          data: {
            name: row.name,
            type: row.type,
            entityId: entity.id,
          },
        });
      });
    });
    modelData.associations.forEach(async (record) => {
      const sourceEntity = await this.prisma.entity.findFirst({
        where: { name: record.source, modelId: createModelData.id },
      });
      const targetEntity = await this.prisma.entity.findFirst({
        where: { name: record.target, modelId: createModelData.id },
      });

      await this.prisma.association.create({
        data: {
          name: record.name,
          modelId: createModelData.id,
          sourceId: sourceEntity?.id ?? 0,
          targetId: targetEntity?.id ?? 0,
        },
      });
    });
    return createModelData;
  }

  public async addEntity(modelId: number, modelData: ModelC) {
    const ret = await this.prisma.model.update({
      where: {
        id: modelId,
      },
      data: {
        entities: {
          create: modelData.entities[0],
        },
      },
    });
    return ret;
  }
}
export default ModelService;
