import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DescriptionDto {
  @IsNotEmpty()
  @IsUUID()
  public task_id: string;

  @IsNotEmpty()
  @IsString()
  public description: string;
}
