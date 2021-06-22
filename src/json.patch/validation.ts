import * as pointer from 'json-pointer';
import { OperationEnum } from './json.operation';
import { OperationDto } from './operation.dto';

export class Validation {
  private patch: OperationDto[] = []

  private errorMessages: string[] = []

  public validate(patch: OperationDto[]) {
    this.patch = patch;
    this.validateOp();
  }

  private validateOp() {
    this.patch.forEach((record: OperationDto) => {
      const isOpSupported = this.doesOperationSupported(record);
      if (!isOpSupported) {
        this.errorMessages.push(`Operation ${record.op} not supported`);
      }
    });
    if (this.errorMessages.length !== 0) throw new Error(this.errorMessages.join(', '));
  }

  private validatePath() {
    // pointer.get();
  }

  // eslint-disable-next-line class-methods-use-this
  private doesOperationSupported(record: OperationDto): boolean {
    if (record.op in OperationEnum) return true;
    return false;
  }
}
