import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, Student } from '@prisma/client';

@Injectable()
export class StudentService {

    constructor(private prisma: PrismaService) {}

    async student(
        studentWhereUniqueInput: Prisma.StudentWhereUniqueInput,
    ): Promise<Student | null> {
        return this.prisma.student.findUnique({
            where: studentWhereUniqueInput,
        });
    }

    async students(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.StudentWhereUniqueInput;
        where?: Prisma.StudentWhereInput;
        orderBy?: Prisma.StudentOrderByWithRelationInput;
    }): Promise<Student[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.student.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createStudent(data: Prisma.StudentCreateInput): Promise<Student> {
        return this.prisma.student.create({
            data,
        });
    }

    // async getStudentEvents(studentId: number): Promise<Student> {
    //     return this.prisma.student.findUnique({
    //         where: { id: studentId },
    //         include: { events: true },
    //     });
    // }

    async updateStudent(params: {
        where: Prisma.StudentWhereUniqueInput;
        data: Prisma.StudentUpdateInput;
    }): Promise<Student> {
        const { where, data } = params;
        return this.prisma.student.update({
            data,
            where,
        });
    }
    
    async deleteStudent(where: Prisma.StudentWhereUniqueInput): Promise<Student> {
        return this.prisma.student.delete({
            where,
        });
    }

    async findAllStudents() {
        return this.prisma.student.findMany();
    }
}
