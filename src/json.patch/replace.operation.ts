import * as pointer from 'json-pointer';
import { PathValueOperation } from './path.value.operation';
import HttpException from '../exceptions/HttpException';

export class ReplaceOperation extends PathValueOperation {
  constructor(path: string, value: any) {
    super('replace', path, value);
  }

  public apply(input: any): any {
    // if path not exists in the document
    if (!pointer.has(input, this.path)) throw new HttpException(404, `No such path ${this.path}`);

    pointer.set(input, this.path, this.value);

    return input;
  }
}
