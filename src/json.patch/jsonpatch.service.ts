import { IModel } from '../mongoose/model';
import ModelService from '../services/model.service';
import { AddOperation } from './add.operation';
import { OperationEnum } from './json.operation';
import { OperationDto } from './operation.dto';
import { RemoveOperation } from './remove.operation';
import { ReplaceOperation } from './replace.operation';
import { Validation } from './validation';

class JsonPatchService {
  private model: any;

  private patch: OperationDto[]

  private addOperations: AddOperation[] = [];

  private removeOperations: RemoveOperation[] = [];

  private replaceOperations: ReplaceOperation[] = [];

  private valdiation = new Validation()

  private modelService = new ModelService()

  constructor(model: any, patch: OperationDto[]) {
    this.model = model;
    this.patch = patch;
  }

  public apply(): IModel {
    this.valdiation.validate(this.patch);

    this.mapToOperations();

    // apply replace then remove then add
    this.replaceOperations.forEach(
      (operation: ReplaceOperation) => {
        this.model = operation?.apply(this.model);
      },
    );
    this.removeOperations.forEach(
      (operation: RemoveOperation) => {
        this.model = operation?.apply(this.model);
      },
    );
    this.addOperations.forEach(
      (operation: AddOperation) => {
        this.model = operation?.apply(this.model);
      },
    );

    return this.model;
  }

  private mapToOperations() {
    this.patch.forEach((record: OperationDto) => {
      switch (record.op) {
        case OperationEnum.add:
          this.addOperations.push(new AddOperation(record.path, record.value));
          break;
        case OperationEnum.replace:
          this.replaceOperations.push(new ReplaceOperation(record.path, record.value));
          break;
        case OperationEnum.remove:
          this.removeOperations.push(new RemoveOperation(record.path));
          break;
        default:
          break;
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
