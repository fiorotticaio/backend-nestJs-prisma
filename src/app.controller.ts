import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { SchoolService } from './school.service';
import { EventService } from './event.service';
import { AppService } from './app.service';
import { 
  Student as StudentModel, 
  School as SchoolModel,
  Event as EventModel
 } from '@prisma/client';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly studentService: StudentService,
    private readonly schoolService: SchoolService,
    private readonly eventService: EventService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  /*=== Students ===*/
  @Post('student')
  async createStudent(
    @Body() studentData: { 
      name: string, 
      cpf: string, 
      password: string, 
      email: string, 
      events: string },
  ): Promise<StudentModel> {
    return this.studentService.createStudent(studentData);
  }

  // @Get('student/:id')
  // async getStudentEvents(@Param('id') id: number): Promise<StudentModel> {
  //   return this.studentService.getStudentEvents(id);
  // }
    

  /*=== Schools ===*/
  @Post('school')
  async createSchool(
    @Body() schoolData: { 
      name: string, 
      name_res: string, 
      cpf_res: string,
      num_students: number,
      password: string,
      email_res: string,
      events: string },
  ): Promise<SchoolModel> {
    return this.schoolService.createSchool(schoolData);
  }


  /*=== Events ===*/
  @Post('event')
  async createEvent(
    @Body() eventData: {
      title: string,
      location: string,
      date?: Date,
      capacity: number,
      filled: number,
    },
  ): Promise<EventModel> {
    return this.eventService.createEvent(eventData);
  }
  
}
