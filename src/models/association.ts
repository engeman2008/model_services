import { Entity } from './entity';

export class Association {
  name: string;

  source: string

  target: string

  constructor(name: string, source: string, target: string) {
    this.name = name;
    this.source = source;
    this.target = target;
  }
}
