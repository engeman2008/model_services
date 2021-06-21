import { Attribute } from './attribute.interface';
import { Model } from './model.interface';
export interface Entity {
    id: number;
    name: string;
    modelId: number;
    attributes: Attribute[];
    model: Model;
}
