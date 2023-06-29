import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DeadlineDto {
  @IsNotEmpty()
  @IsUUID()
  public task_id: string;

  @IsNotEmpty()
  @IsString()
  public deadline: string;
}
