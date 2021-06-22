export declare const enum OperationEnum {
    add = "add",
    delete = "delete",
    change = "change"
}
export declare abstract class JsonOperation {
    protected op: string;
    protected path: string;
    constructor(op: string, path: string);
    abstract apply(value: string): any;
    getOp(): string;
    getPath(): string;
}
