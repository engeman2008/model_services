/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import { IModel, MyModelDoc, myModelInterface } from './model';

const AutoIncrement = require('mongoose-sequence')(mongoose);

const attributeSchema = new mongoose.Schema({
  name: String,
  type: String,
});

const entitySchema = new mongoose.Schema({
  name: String,
  attributes: [
    attributeSchema,
  ],
});

const associationSchema = new mongoose.Schema({
  name: String,
  source: String,
  target: String,
});

const myModelSchema = new mongoose.Schema({
  name: String,
  entities: [
    entitySchema,
  ],
  associations: [
    associationSchema,
  ],
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

// const MyModel = mongoose.model<MyModelDoc, myModelInterface>('MyModel', myModelSchema);
const MyModel = mongoose.model('MyModel', myModelSchema);

myModelSchema.plugin(AutoIncrement, { inc_field: 'id' });

export { MyModel };
