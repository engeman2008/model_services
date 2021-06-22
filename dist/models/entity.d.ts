import { Attribute } from '../interfaces/attribute.interface';
export interface Entity {
    id: number;
    name: string;
    attributes: Attribute[];
}
