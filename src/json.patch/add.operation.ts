/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { PathValueOperation } from './path.value.operation';

export class AddOperation extends PathValueOperation {
  constructor(path: string, value: string) {
    super('add', path, value);
  }

  public apply(value: string): any {
    return value;
  }
}
