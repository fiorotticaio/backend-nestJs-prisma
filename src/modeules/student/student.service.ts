import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { StudentDTO } from './student.dto';

@Injectable()
export class StudentService {

    constructor(private prisma: PrismaService) {}

    async create(data: StudentDTO) {
        const studentExists = await this.prisma.student.findFirst({
            where: {
                cpf: data.cpf
            }
        })

        if (studentExists) {
            throw new Error('Student already exists');
        }

        const student = await this.prisma.student.create({
            data,
        });

        return student;
    }

    async findAll() {
        return this.prisma.student.findMany();
    }

    async update(id: number, data: StudentDTO) {
        const studentExists = await this.prisma.student.findUnique({
            where: {
                id
            }
        })

        if (!studentExists) {
            throw new Error('Student not exists');
        }

        return await this.prisma.student.update({
            where: { id },
            data,
        })
    }

    async delete(id: number) {
        const studentExists = await this.prisma.student.findUnique({
            where: {
                id
            }
        })

        if (!studentExists) {
            throw new Error('Student not exists');
        }

        return await this.prisma.student.delete({
            where: { id },
        })
    }
}
