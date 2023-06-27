import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  public login: string;

  @IsString()
  public password: string;
}
