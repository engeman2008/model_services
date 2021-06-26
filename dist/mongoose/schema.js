"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyModel = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const AutoIncrement = require('mongoose-sequence')(mongoose_1.default);
const attributeSchema = new mongoose_1.default.Schema({
    name: { type: String, required: [true, 'Why no attribute name?'] },
    type: { type: String, required: [true, 'Why no attribute type?'] },
});
const entitySchema = new mongoose_1.default.Schema({
    name: { type: String, required: [true, 'Why no entity name?'] },
    attributes: [
        attributeSchema,
    ],
});
const associationSchema = new mongoose_1.default.Schema({
    name: { type: String, required: [true, 'Why no association name?'] },
    source: { type: String, required: [true, 'Why no association source?'] },
    target: { type: String, required: [true, 'Why no association target?'] },
});
const myModelSchema = new mongoose_1.default.Schema({
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
const MyModel = mongoose_1.default.model('MyModel', myModelSchema);
exports.MyModel = MyModel;
myModelSchema.plugin(AutoIncrement, { inc_field: 'id' });
