import { IsNotEmpty, IsUUID } from 'class-validator';

export class StatusDto {
  @IsNotEmpty()
  @IsUUID()
  public task_id: string;

  @IsNotEmpty()
  @IsUUID()
  public status: string;
}
