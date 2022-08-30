import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentDTO } from './student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() data: StudentDTO) {
    return this.studentService.create(data);
  }

  @Get()
  async findAll() {
    return this.studentService.findAll();
  }

  // https://localhost:3000/student/id
  @Put(":id")
  async update(@Param("id") id: number, @Body() data: StudentDTO) {
    return this.studentService.update(id, data);
  }
  
  // https://localhost:3000/student/id
  @Delete(":id")
  async delete(@Param("id") id: number) {
    return this.studentService.delete(id);
  }
}
