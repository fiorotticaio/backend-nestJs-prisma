import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './student.service';
import { PrismaService } from './prisma.service';
import { SchoolService } from './school.service';
import { EventService } from './event.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, StudentService, SchoolService, EventService],
})
export class AppModule {}
