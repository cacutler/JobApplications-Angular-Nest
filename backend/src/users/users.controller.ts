import { Controller, Get, Patch, Body, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard';
@Controller('users')
export class UsersController {}