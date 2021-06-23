import { deepCopy } from '../utils/utils';
import { JsonOperation } from './json.operation';

export abstract class PathValueOperation extends JsonOperation {
  protected value: any

  constructor(op: string, path: string, value: any) {
    super(op, path);
    this.value = deepCopy(value);
  }

  public getValue() {
    return deepCopy(this.value);
  }
}
