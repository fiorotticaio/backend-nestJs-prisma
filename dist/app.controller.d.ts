import { StudentService } from './student.service';
import { SchoolService } from './school.service';
import { EventService } from './event.service';
import { AppService } from './app.service';
import { Student as StudentModel, School as SchoolModel, Event as EventModel } from '@prisma/client';
export declare class AppController {
    private readonly appService;
    private readonly studentService;
    private readonly schoolService;
    private readonly eventService;
    constructor(appService: AppService, studentService: StudentService, schoolService: SchoolService, eventService: EventService);
    getHello(): string;
    createStudent(studentData: {
        name: string;
        cpf: string;
        password: string;
        email: string;
        events: string;
    }): Promise<StudentModel>;
    getStudentEvents(id: number): Promise<StudentModel>;
    createSchool(schoolData: {
        name: string;
        name_res: string;
        cpf_res: string;
        num_students: number;
        password: string;
        email_res: string;
        events: string;
    }): Promise<SchoolModel>;
    createEvent(eventData: {
        title: string;
        location: string;
        date?: Date;
        capacity: number;
        filled: number;
    }): Promise<EventModel>;
}
