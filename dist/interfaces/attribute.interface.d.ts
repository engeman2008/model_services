import { Entity } from './entity.interface';
export interface Attribute {
    id: number;
    name: string;
    type: string;
    entityId: number;
    entity: Entity;
}
