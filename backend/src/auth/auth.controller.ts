import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateUserDto } from '../users/dto/create-user.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('register')
    register(@Body() dto: CreateUserDto) {
        return this.authService.register(dto);
    }
    @Post('login')
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }
    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMet(@Request() req) {
        return req.user;
    }
}