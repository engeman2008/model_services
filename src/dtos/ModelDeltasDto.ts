import { IsJSON } from 'class-validator';

export class ModelDeltasDto {
  @IsJSON()
  public patch: string = '';
}
