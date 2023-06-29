import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  public title: string;

  @IsNotEmpty()
  @IsString()
  public deadline: string;

  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsNotEmpty()
  @IsUUID()
  public priority: string;

  @IsNotEmpty()
  @IsUUID()
  public responsible: string;
}
