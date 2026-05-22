import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [ApplicationsModule, PrismaModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}