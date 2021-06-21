import { Model } from '@prisma/client';
import { CreateModelDto } from '../dtos/CreateModelDto';
declare class UserService {
    private prisma;
    findAllModels(): Promise<Model[]>;
    createModel(modelData: CreateModelDto): Promise<Model>;
}
export default UserService;
