export declare enum OperationEnum {
    add = "add",
    remove = "remove",
    replace = "replace"
}
export declare abstract class JsonOperation {
    protected op: string;
    protected path: string;
    constructor(op: string, path: string);
    abstract apply(): any;
    getOp(): string;
    getPath(): string;
}
