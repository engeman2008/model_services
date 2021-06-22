/* eslint-disable no-unused-vars */
export const enum OperationEnum {
  add = 'add',
  remove = 'remove',
  replace = 'replace',
}

export abstract class JsonOperation {
  protected op: string

  protected path: string

  constructor(op: string, path: string) {
    this.op = op;
    this.path = path;
  }

  abstract apply(value: string): any;

  getOp() : string {
    return this.op;
  }

  getPath() : string {
    return this.path;
  }
}
