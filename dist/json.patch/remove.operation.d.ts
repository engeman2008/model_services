import { JsonOperation } from './json.operation';
export declare class RemoveOperation extends JsonOperation {
    constructor(path: string);
    apply(input: any): any;
}
