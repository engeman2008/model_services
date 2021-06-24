import { Document } from 'mongoose';
import { IAttribute } from './attribute';
export interface IEntity extends Document {
    name: string;
    attributes: IAttribute[];
}
