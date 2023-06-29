import { IsNotEmpty, IsUUID } from 'class-validator';

export class SubordinateDto {
  @IsNotEmpty()
  @IsUUID()
  public subordinate_id: string;
}
