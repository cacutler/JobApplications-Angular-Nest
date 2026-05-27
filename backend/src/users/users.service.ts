import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    async create(email: string, passwordHash: string, name: string, username: string) {
        return this.prisma.user.create({data: {email, password: passwordHash, name, username}});
    }
    async findByEmail(email: string) {
        return this.prisma.user.findUnique({where: {email}});
    }
    async findById(id: number) {
        return this.prisma.user.findUnique({where: {id}});
    }
    async update(id: number, data: {name?: string, passwordHash: string, email: string, username: string}) {
        return this.prisma.user.update({where: {id}, data});
    }
}