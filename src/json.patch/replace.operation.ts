/* eslint-disable no-unused-vars */
import { PathValueOperation } from './path.value.operation';

export class ReplaceOperation extends PathValueOperation {
  constructor(path: string, value: string) {
    super('replace', path, value);
  }

  public apply() {
    this.path = 'Replace';
  }
}
