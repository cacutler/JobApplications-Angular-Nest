import { IsEmail, IsOptional, IsString, Min, MinLength } from "class-validator";
export class UpdateUserDto {
    @IsString()
    @IsOptional()
    name?: string;
    @IsString()
    @IsOptional()
    username?: string;
    @IsEmail()
    @IsOptional()
    email?: string;
    @IsString()
    @IsOptional()
    @MinLength(8)
    password?: string;
}