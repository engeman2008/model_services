export declare const enum OperationEnum {
    add = "add",
    delete = "delete",
    change = "change"
}
export interface Operation {
    op: OperationEnum;
    from: string;
    path: string;
    value?: string;
}
