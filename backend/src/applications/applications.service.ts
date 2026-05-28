import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
@Injectable()
export class ApplicationsService {
    constructor(private prisma: PrismaService) {}
    async findAll(userId: number) {
        return this.prisma.application.findMany({where: {userId}, orderBy: {submission: 'desc'}});
    }
    async findOne(id: number, userId: number) {
        const app = await this.prisma.application.findUnique({where: {id}});
        if (!app) {
            throw new NotFoundException('Application not found');
        }
        if (app.userId !== userId) {
            throw new ForbiddenException();
        }
        return app;
    }
    async create(userId: number, dto: CreateApplicationDto) {
        return this.prisma.application.create({data: {...dto, userId, submission: dto.submission ? new Date(dto.submission) : null}});
    }
    async update(id: number, userId: number, dto: UpdateApplicationDto) {
        await this.findOne(id, userId);
        return this.prisma.application.update({where: {id}, data: {...dto, submission: dto.submission ? new Date(dto.submission) : undefined}});
    }
    async remove(id: number, userId: number) {
        await this.findOne(id, userId);
        return this.prisma.application.delete({where: {id}});
    }
}