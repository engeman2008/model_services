import { IModel } from '../mongoose/model';
import { OperationDto } from './operation.dto';
declare class JsonPatchService {
    private model;
    private patch;
    private addOperations;
    private removeOperations;
    private replaceOperations;
    private valdiation;
    private modelService;
    constructor(model: any, patch: OperationDto[]);
    apply(): IModel;
    private mapToOperations;
    setModel(model: any): void;
    setPatch(patch: JSON): void;
}
export default JsonPatchService;
