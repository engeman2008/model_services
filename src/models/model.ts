import { Association } from './association';
import { Entity } from './entity';

export class Model {
  name: string

  entities: Entity[]

  associations: Association[]

  constructor(name: string, entities: Entity[], associations: Association[]) {
    this.name = name;
    this.entities = entities;
    this.associations = associations;
  }
}
