import { IsString, Min } from 'class-validator';

export class CreateModelDto {
  @IsString()
  @Min(5)
  public name: string = '';
}
