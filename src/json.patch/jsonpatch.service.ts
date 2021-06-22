import { Model } from '@prisma/client';
import { AddOperation } from './add.operation';
import { OperationEnum } from './json.operation';
import { OperationDto } from './operation.dto';
import { RemoveOperation } from './remove.operation';
import { ReplaceOperation } from './replace.operation';
import { Validation } from './validation';

// eslint-disable-next-line no-unused-vars
class JsonPatchService {
  private model: Model;

  private patch: OperationDto[]

  private patchOperations: (AddOperation | ReplaceOperation | RemoveOperation | null)[] = [];

  private valdiation = new Validation()

  constructor(model: Model, patch: OperationDto[]) {
    this.model = model;
    this.patch = patch;
  }

  public apply() {
    this.valdiation.validate(this.patch);

    this.mapOperations();

    this.patchOperations.forEach(
      (operation: (AddOperation | ReplaceOperation | RemoveOperation | null)) => {
        operation?.apply(this.model); // apply operation on the model and return the model
      },
    );

    // this.operations.apply;

    return this.patch;
  }

  private mapOperations() {
    this.patchOperations = this.patch.map((record: OperationDto) => {
      switch (record.op) {
        case OperationEnum.add:
          return new AddOperation(record.path, record.value ?? '');
        case OperationEnum.replace:
          return new ReplaceOperation(record.path, record.value ?? '');
        case OperationEnum.remove:
          return new RemoveOperation(record.path);
        default:
          return null;
      }
    });
  }

  public setModel(model: Model) {
    this.setModel(model);
  }

  public setPatch(patch: JSON) {
    this.setPatch(patch);
  }
}

export default JsonPatchService;
