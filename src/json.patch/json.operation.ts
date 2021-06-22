/* eslint-disable no-unused-vars */
export enum OperationEnum {
  add = 'add',
  remove = 'remove',
  replace = 'replace',
}

// export const OperationType = OperationEnum.add | OperationEnum.remove | OperationEnum.replace;

export abstract class JsonOperation {
  protected op: string

  protected path: string

  constructor(op: string, path: string) {
    this.op = op;
    this.path = path;
  }

  abstract apply(input: any): any;

  getOp() : string {
    return this.op;
  }

  getPath() : string {
    return this.path;
  }
}
