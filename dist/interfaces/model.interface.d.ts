import { Association } from './association.interface';
import { Entity } from './entity.interface';
export interface Model {
    id: number;
    name: string;
    entities: Entity[];
    associations: Association[];
}
