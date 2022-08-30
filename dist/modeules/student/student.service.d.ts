import { PrismaService } from '../../database/PrismaService';
import { StudentDTO } from './student.dto';
export declare class StudentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: StudentDTO): Promise<import(".prisma/client").Student>;
    findAll(): Promise<import(".prisma/client").Student[]>;
    update(id: number, data: StudentDTO): Promise<import(".prisma/client").Student>;
    delete(id: number): Promise<import(".prisma/client").Student>;
}
