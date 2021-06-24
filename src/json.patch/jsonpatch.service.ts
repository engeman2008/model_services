/* eslint-disable class-methods-use-this */
import { IModel } from '../mongoose/model';
import ModelService from '../services/model.service';
import { AddOperation } from './add.operation';
import { OperationEnum } from './json.operation';
import { OperationDto } from './operation.dto';
import { RemoveOperation } from './remove.operation';
import { ReplaceOperation } from './replace.operation';
import { Validation } from './validation';

// eslint-disable-next-line no-unused-vars
class JsonPatchService {
  private model: any;

  private patch: OperationDto[]

  private patchOperations: (AddOperation | ReplaceOperation | RemoveOperation | null)[] = [];

  private valdiation = new Validation()

  private modelService = new ModelService()

  constructor(model: any, patch: OperationDto[]) {
    this.model = model;
    this.patch = patch;
  }

  public apply() : IModel {
    this.valdiation.validate(this.patch);

    this.mapToOperations();

    this.patchOperations.forEach(
      async (operation: (AddOperation | ReplaceOperation | RemoveOperation | null)) => {
        this.model = operation?.apply(this.model);
      },
    );

    return this.model;
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

  public setModel(model: any) {
    this.setModel(model);
  }

  public setPatch(patch: JSON) {
    this.setPatch(patch);
  }
}

export default JsonPatchService;
