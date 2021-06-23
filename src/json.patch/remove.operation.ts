/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import * as pointer from 'json-pointer';
import { JsonOperation } from './json.operation';
import HttpException from '../exceptions/HttpException';

export class RemoveOperation extends JsonOperation {
  constructor(path: string) {
    super('remove', path);
  }

  public apply(input: any): any {
    console.log(input);
    if (pointer.has(input, this.path)) {
      pointer.remove(input, this.path);
    }

    const dict: Record<string, any> = pointer.dict(input);
    console.log(dict);

    // console.log(pointer.parse(this.path));
    // Object.keys(dict).forEach((key) => {
    //   if (dict[key] === 'Person') {
    //     console.log(`Found. ${key}`);
    //     const index = key.lastIndexOf('/');
    //     console.log(`lastIndexOf found String :${index}`);
    //     const path = key.substring(0, index);
    //     console.log(path);

    //     const documentss: any[] = pointer.get(input, path);
    //     console.log(documentss);
    //     pointer.remove(input, path);
    //     console.log(input);
    //   } else {
    //     throw new HttpException(404, `No such path ${this.path}`);
    //   }
    // });

    return this.path;
  }
}
