/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import * as pointer from 'json-pointer';
import HttpException from '../exceptions/HttpException';
import { removeNulls } from '../utils/utils';
import { PathValueOperation } from './path.value.operation';

export class AddOperation extends PathValueOperation {
  constructor(path: string, value: any) {
    super('add', path, value);
  }

  public apply(input: any): any {
    // if path not exists in the document
    if (!pointer.has(input, this.path)) throw new HttpException(404, `No such path ${this.path}`);
    console.log(this.value);
    pointer.set(input, this.path, this.value);
    return removeNulls(input);
  }
}
