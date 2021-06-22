import { PathValueOperation } from './path.value.operation';
export declare class ReplaceOperation extends PathValueOperation {
    constructor(path: string, value: string);
    apply(): void;
}
