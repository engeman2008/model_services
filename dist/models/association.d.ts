import { Entity } from '../interfaces/entity.interface';
export interface Association {
    id: number;
    name: string;
    source: Entity;
    target: Entity;
}
