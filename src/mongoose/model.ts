import mongoose, { Document } from 'mongoose';
import { IEntity } from './entity';
import { IAssociation } from './association';

export interface IModel extends Document {
  name: string,
  entities: IEntity[]
  associations: IAssociation[]
}

export interface MyModelDoc extends mongoose.Document {
  name: string,
  entities: IEntity[]
  associations: IAssociation[]
}

export interface myModelInterface extends mongoose.Model<MyModelDoc> {
  // eslint-disable-next-line no-unused-vars
  build(attr: IModel): MyModelDoc
}
