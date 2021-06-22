import { IsString, MinLength } from 'class-validator';

export class CreateModelDto {
  @IsString()
  @MinLength(5)
  public name: string = '';
}
