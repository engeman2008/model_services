import { Document } from 'mongoose';
import { IEntity } from './entity';
import { IAssociation } from './association';
export interface IModel extends Document {
    name: string;
    entities: IEntity[];
    associations: IAssociation[];
}
