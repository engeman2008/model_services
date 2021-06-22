import { Model } from '@prisma/client';
import { OperationDto } from './operation.dto';
declare class JsonPatchService {
    private model;
    private patch;
    private patchOperations;
    private errorMessages;
    constructor(model: Model, patch: OperationDto[]);
    apply(): OperationDto[];
    private validate;
    private checkOpSupported;
    private doesOperationSupported;
    private mapOperations;
    /**
     * setModel
     */
    setModel(model: Model): void;
    setPatch(patch: JSON): void;
}
export default JsonPatchService;
