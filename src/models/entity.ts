import { Attribute } from './attributes';

export class Entity {
  name: string;

  attributes: Attribute[]

  constructor(name: string, attributes: Attribute[]) {
    this.name = name;
    this.attributes = attributes;
  }
}
