import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
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

    async updateUser(params: {
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

    // async create(data: StudentDTO) {
    //     const studentExists = await this.prisma.student.findFirst({
    //         where: {
    //             cpf: data.cpf
    //         }
    //     })

    //     if (studentExists) {
    //         throw new Error('Student already exists');
    //     }

    //     const student = await this.prisma.student.create({
    //         data,
    //     });

    //     return student;
    // }

    async findAll() {
        return this.prisma.student.findMany();
    }

    // async update(id: Prisma.StudentWhereUniqueInput, data: StudentDTO): Promise<StudentDTO> {
    //     const studentExists = await this.prisma.student.findUnique({
    //         where: { id }
    //     })

    //     if (!studentExists) {
    //         throw new Error('Student not exists');
    //     }

    //     return await this.prisma.student.update({
    //         where: { id },
    //         data,
    //     })
    // }

    // async delete(id: Prisma.StudentWhereUniqueInput) {
    //     const studentExists = await this.prisma.student.findUnique({
    //         where: {
    //             id
    //         }
    //     })

    //     if (!studentExists) {
    //         throw new Error('Student not exists');
    //     }

    //     return await this.prisma.student.delete({
    //         where: { id },
    //     })
    // }
}
