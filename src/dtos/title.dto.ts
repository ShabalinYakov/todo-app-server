import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class TitleDto {
  @IsNotEmpty()
  @IsUUID()
  public task_id: string;

  @IsNotEmpty()
  @IsString()
  public title: string;
}
