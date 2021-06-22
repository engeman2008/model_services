import { Model } from '@prisma/client';
import { OperationDto } from './operation.dto';
declare class JsonPatchService {
    private model;
    private patch;
    private patchOperations;
    constructor(model: Model, patch: OperationDto[]);
    apply(): OperationDto[];
    /**
     * setModel
     */
    setModel(model: Model): void;
    setPatch(patch: JSON): void;
}
export default JsonPatchService;
