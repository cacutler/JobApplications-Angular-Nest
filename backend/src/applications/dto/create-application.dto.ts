import { IsString, IsOptional, IsUrl, IsDateString, IsEnum } from "class-validator";
import {Status} from '../../common/enums/status.enum';
export class CreateApplicationDto {
    @IsString()
    title: string;
    @IsString()
    company: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    qualifications?: string;
    @IsEnum(Status)
    status?: Status
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