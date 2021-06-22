/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import * as pointer from 'json-pointer';
import HttpException from '../exceptions/HttpException';
import { PathValueOperation } from './path.value.operation';

export class AddOperation extends PathValueOperation {
  constructor(path: string, value: string) {
    super('add', path, value);
  }

  public apply(input: any): any {
    // if path not exists in the document
    if (!pointer.has(input, this.path)) throw new HttpException(404, `No such path ${this.path}`);
    const param = pointer.get(input, this.path);

    pointer.set(input, this.path, this.value);

    console.log(input);
    return this.value;
  }
}
