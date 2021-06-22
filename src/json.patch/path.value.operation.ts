import { deepCopy } from '../utils/utils';
import { JsonOperation } from './json.operation';

export abstract class PathValueOperation extends JsonOperation {
  protected value: string

  constructor(op: string, path: string, value: string) {
    super(op, path);
    this.value = value;
  }

  public getValue() {
    return deepCopy(this.value);
  }
}
