import mongoose from 'mongoose';
import { IModel } from './model';

const AutoIncrement = require('mongoose-sequence')(mongoose);

const attributeSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Why no attribute name?'] },
  type: { type: String, required: [true, 'Why no attribute type?'] },
});

const entitySchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Why no entity name?'] },
  attributes: [
    attributeSchema,
  ],
});

const associationSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Why no association name?'] },
  source: { type: String, required: [true, 'Why no association source?'] },
  target: { type: String, required: [true, 'Why no association target?'] },
});

const myModelSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Why no model name?'] },
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

const MyModel = mongoose.model<IModel>('MyModel', myModelSchema);

myModelSchema.plugin(AutoIncrement, { inc_field: 'id' });

export { MyModel };
