import { IsNotEmpty, IsUUID } from 'class-validator';

export class PriorityDto {
  @IsNotEmpty()
  @IsUUID()
  public task_id: string;

  @IsNotEmpty()
  @IsUUID()
  public priority: string;
}
