import { Association } from '../interfaces/association.interface';
import { Entity } from '../interfaces/entity.interface';
export interface Model {
    id: number;
    name: string;
    entities: Entity[];
    associations: Association[];
}
