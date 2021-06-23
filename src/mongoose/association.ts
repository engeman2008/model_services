import { Document } from 'mongoose';
import { IEntity } from './entity';

export interface IAssociation extends Document {
  name: string,
  source: IEntity,
  target: IEntity
}
