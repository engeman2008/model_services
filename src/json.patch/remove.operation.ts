import * as pointer from 'json-pointer';
import { JsonOperation } from './json.operation';
import HttpException from '../exceptions/HttpException';

export class RemoveOperation extends JsonOperation {
  constructor(path: string) {
    super('remove', path);
  }

  public apply(input: any): any {
    // if path not exists in the document
    if (!pointer.has(input, this.path)) throw new HttpException(404, `No such path ${this.path}`);
    const document: any[] = pointer.get(input, this.path);

    // if is array the removed path , then put it to []
    if (Array.isArray(document)) {
      pointer.set(input, this.path, undefined);
    }

    pointer.remove(input, this.path);

    return input;
  }
}
