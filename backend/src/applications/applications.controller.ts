import { Controller, Get, Post, Patch, Delete, Param, Body, Request, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApplicationsService } from './applications.service.js';
import { CreateApplicationDto } from './dto/create-application.dto.js';
import { UpdateApplicationDto } from './dto/update-application.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
@UseGuards(JwtAuthGuard)
@Controller('applications')
export class ApplicationsController {
    constructor(private applicationsService: ApplicationsService) {}
    @Get()
    findAll(@Request() req) {
        return this.applicationsService.findAll(req.user.id)
    }
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, @Request() req) {
        return this.applicationsService.findOne(id, req.user.id);
    }
    @Post()
    create(@Body() dto: CreateApplicationDto, @Request() req) {
        return this.applicationsService.create(req.user.id, dto);
    }
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateApplicationDto, @Request() req) {
        return this.applicationsService.update(id, req.user.id, dto);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
        return this.applicationsService.remove(id, req.user.id);
    }
}