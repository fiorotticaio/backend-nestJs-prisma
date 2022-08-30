import { StudentDTO } from './student.dto';
import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(data: StudentDTO): Promise<import(".prisma/client").Student>;
    findAll(): Promise<import(".prisma/client").Student[]>;
    update(id: number, data: StudentDTO): Promise<import(".prisma/client").Student>;
    delete(id: number): Promise<import(".prisma/client").Student>;
}
