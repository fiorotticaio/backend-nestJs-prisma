import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { StudentService } from './modeules/student/student.service';
import { Student as StudentModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly studentService: StudentService
  ) {}

  @Post('student')
  async createStudent(
    @Body() studentData: { name: string, cpf: string, password: string, email: string, events: string },
  ): Promise<StudentModel> {
    return this.studentService.createStudent(studentData);
  }


}
