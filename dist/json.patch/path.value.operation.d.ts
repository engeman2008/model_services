import { JsonOperation } from './json.operation';
export declare abstract class PathValueOperation extends JsonOperation {
    protected value: string;
    constructor(op: string, path: string, value: string);
    getValue(): string;
}
