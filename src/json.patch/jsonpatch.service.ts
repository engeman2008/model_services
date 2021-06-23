/* eslint-disable class-methods-use-this */
import { Model as PrisamModel } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { Association } from '../models/association';
import { Attribute } from '../models/attributes';
import { Entity } from '../models/entity';
import { Model } from '../models/model';
import ModelService from '../services/model.service';
import { isEmpty } from '../utils/utils';
import { AddOperation } from './add.operation';
import { OperationEnum } from './json.operation';
import { OperationDto } from './operation.dto';
import { RemoveOperation } from './remove.operation';
import { ReplaceOperation } from './replace.operation';
import { Validation } from './validation';

// eslint-disable-next-line no-unused-vars
class JsonPatchService {
  private model: PrisamModel;

  private patch: OperationDto[]

  private patchOperations: (AddOperation | ReplaceOperation | RemoveOperation | null)[] = [];

  private valdiation = new Validation()

  private modelService = new ModelService()

  constructor(model: PrisamModel, patch: OperationDto[]) {
    this.model = model;
    this.patch = patch;
  }

  public apply() {
    this.valdiation.validate(this.patch);

    this.mapToOperations();

    this.patchOperations.forEach(
      async (operation: (AddOperation | ReplaceOperation | RemoveOperation | null)) => {
        // eslint-disable-next-line no-unused-vars
        this.model = operation?.apply(this.model);
        // await this.modelService.updateModel(this.model.id, result);
      },
    );

    return this.patch;
  }

  private mapToOperations() {
    this.patchOperations = this.patch.map((record: OperationDto) => {
      switch (record.op) {
        case OperationEnum.add:
          return new AddOperation(record.path, record.value);
        case OperationEnum.replace:
          return new ReplaceOperation(record.path, record.value);
        case OperationEnum.remove:
          return new RemoveOperation(record.path);
        default:
          return null;
      }
    });
  }

  public setModel(model: PrisamModel) {
    this.setModel(model);
  }

  public setPatch(patch: JSON) {
    this.setPatch(patch);
  }

  public mapValueToModel(path: string, value: any) {
    if (isEmpty(value)) return null;
    let mappedValueToModel;

    if (isEmpty(path)) {
      mappedValueToModel = plainToClass(Model, value);
    } else if (path.match('/entities')) {
      mappedValueToModel = (plainToClass(Entity, value));
    } else if (path.match('/associations')) {
      mappedValueToModel = plainToClass(Association, value);
    } else {
      mappedValueToModel = plainToClass(Attribute, value);
    }

    return mappedValueToModel;
  }
}

export default JsonPatchService;
