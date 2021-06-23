import { Document } from 'mongoose';

export interface IAttribute extends Document {
  name: string,
  type: string
}
