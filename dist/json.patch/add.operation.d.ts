import { PathValueOperation } from './path.value.operation';
export declare class AddOperation extends PathValueOperation {
    constructor(path: string, value: string);
    apply(input: any): any;
}
