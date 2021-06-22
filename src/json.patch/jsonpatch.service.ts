import { Model } from '@prisma/client';
import { AddOperation } from './add.operation';
import { OperationEnum } from './json.operation';
import { OperationDto } from './operation.dto';
import { RemoveOperation } from './remove.operation';
import { ReplaceOperation } from './replace.operation';

// eslint-disable-next-line no-unused-vars
class JsonPatchService {
  private model: Model;

  private patch: OperationDto[]

  private patchOperations: (AddOperation | ReplaceOperation | RemoveOperation | null)[] = [];

  constructor(model: Model, patch: OperationDto[]) {
    this.model = model;
    this.patch = patch;
  }
  // private operations : []; // list of operation

  public apply() {
    // validate the patch
    // loop through each line and for each line apply the operation
    console.log(this.patch);
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
    console.log(this.patchOperations);

    this.patchOperations.forEach((operation) => {
      op;
    });

    // for each operation in this.operations
    // this.operations.apply;

    return this.patch;
  }

  /**
   * setModel
   */
  public setModel(model: Model) {
    this.setModel(model);
  }

  public setPatch(patch: JSON) {
    this.setPatch(patch);
  }

  // public validate() {

  // }

  // public applyOperation() {

  // }
}

export default JsonPatchService;
