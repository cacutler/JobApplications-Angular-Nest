import { IsString, IsOptional, IsUrl, IsDateString, IsEnum } from "class-validator";
import { Status } from "../../../generated/prisma/enums.js";
export class UpdateApplicationDto {
    @IsString()
    @IsOptional()
    title?: string;
    @IsString()
    @IsOptional()
    company?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    qualifications?: string;
    @IsEnum(Status)
    @IsOptional()
    status?: Status;
    @IsString()
    @IsOptional()
    stage?: string;
    @IsString()
    @IsOptional()
    notes?: string;
    @IsUrl()
    @IsOptional()
    url?: string;
    @IsDateString()
    @IsOptional()
    submission?: string;
}