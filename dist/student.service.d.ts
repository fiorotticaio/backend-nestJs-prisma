import { PrismaService } from './prisma.service';
import { Prisma, Student } from '@prisma/client';
export declare class StudentService {
    private prisma;
    constructor(prisma: PrismaService);
    student(studentWhereUniqueInput: Prisma.StudentWhereUniqueInput): Promise<Student | null>;
    students(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.StudentWhereUniqueInput;
        where?: Prisma.StudentWhereInput;
        orderBy?: Prisma.StudentOrderByWithRelationInput;
    }): Promise<Student[]>;
    createStudent(data: Prisma.StudentCreateInput): Promise<Student>;
    getStudentEvents(studentId: number): Promise<Student>;
    updateStudent(params: {
        where: Prisma.StudentWhereUniqueInput;
        data: Prisma.StudentUpdateInput;
    }): Promise<Student>;
    deleteStudent(where: Prisma.StudentWhereUniqueInput): Promise<Student>;
    findAllStudents(): Promise<Student[]>;
}
