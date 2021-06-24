import { JsonOperation } from './json.operation';
export declare abstract class PathValueOperation extends JsonOperation {
    protected value: any;
    constructor(op: string, path: string, value: any);
    getValue(): any;
}
