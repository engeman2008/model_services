import { Entity } from './entity.interface';
import { Model } from './model.interface';
export interface Association {
    id: number;
    name: string;
    modelId: number;
    sourceId: number;
    targetId: number;
    model: Model;
    source: Entity;
    target: Entity;
}
