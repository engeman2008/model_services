import { OperationDto } from './operation.dto';
export declare class Validation {
    private patch;
    private errorMessages;
    validate(patch: OperationDto[]): void;
    private validateOp;
    private doesOperationSupported;
}
