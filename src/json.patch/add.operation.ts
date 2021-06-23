import * as pointer from 'json-pointer';
import HttpException from '../exceptions/HttpException';
import { PathValueOperation } from './path.value.operation';

export class AddOperation extends PathValueOperation {
  constructor(path: string, value: any) {
    super('add', path, value);
  }

  public apply(input: any): any {
    // if path not exists in the document
    if (!pointer.has(input, this.path)) throw new HttpException(404, `No such path ${this.path}`);

    let document: any[] = pointer.get(input, this.path);
    if (document == null) {
      document = this.value;
    } else if (Array.isArray(this.value)) {
      this.value.forEach((record) => document.push(record));
    } else {
      document.push(this.value);
    }
    pointer.set(input, this.path, document);

    return input;
  }
}
