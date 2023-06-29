import { IsNotEmpty, IsUUID } from 'class-validator';

export class ResponsibleDto {
  @IsNotEmpty()
  @IsUUID()
  public task_id: string;

  @IsNotEmpty()
  @IsUUID()
  public responsible: string;
}
