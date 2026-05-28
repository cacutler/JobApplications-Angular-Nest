import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service.js';
import { CreateUserDto } from '../users/dto/create-user.dto.js';
import { LoginDto } from './dto/login.dto.js';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}
    async register(dto: CreateUserDto) {
        const existing = await this.usersService.findByEmail(dto.email);
        if (existing) {
            throw new ConflictException('Email already in use');
        }
        const passwordHash = await bcrypt.hash(dto.password, 12);
        const user = await this.usersService.create(dto.email, passwordHash, dto.name, dto.username);
        return this.signToken(user);
    }
    async login(dto: LoginDto) {
        const user = await this.usersService.findByEmail(dto.email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const valid = await bcrypt.compare(dto.password, user.password); //Claude, check the password compare logic
        if (!valid) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return this.signToken(user);
    }
    private signToken(user: { id: number; email: string; name: string; username: string }) {
    const payload = { sub: user.id, email: user.email };
        return {access_token: this.jwtService.sign(payload), user: { id: user.id, email: user.email, name: user.name, username: user.username }};
    }
}