import { StudentService } from './modeules/student/student.service';
import { Student as StudentModel } from '@prisma/client';
export declare class AppController {
    private readonly studentService;
    constructor(studentService: StudentService);
    createStudent(studentData: {
        name: string;
        cpf: string;
        password: string;
        email: string;
        events: string;
    }): Promise<StudentModel>;
}
