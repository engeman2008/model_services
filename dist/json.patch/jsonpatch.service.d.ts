import { Model } from '@prisma/client';
import { OperationDto } from './operation.dto';
declare class JsonPatchService {
    private model;
    private patch;
    private patchOperations;
    private valdiation;
    constructor(model: Model, patch: OperationDto[]);
    apply(): OperationDto[];
    private mapOperations;
    setModel(model: Model): void;
    setPatch(patch: JSON): void;
}
export default JsonPatchService;
