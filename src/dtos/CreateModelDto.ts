import { IsString, MinLength } from 'class-validator';
import { Association } from '../models/association';
import { Entity } from '../models/entity';

export class CreateModelDto {
  @IsString()
  @MinLength(5)
  public name: string = '';

  public entities!: Entity[];

  public associations!: Association[]
}
