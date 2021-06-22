/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { JsonOperation } from './json.operation';

export class RemoveOperation extends JsonOperation {
  constructor(path: string) {
    super('remove', path);
  }

  public apply(): any {
    return this.path;
  }
}
