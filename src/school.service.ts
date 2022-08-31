import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, School } from '@prisma/client';

@Injectable()
export class SchoolService {

    constructor(private prisma: PrismaService) {}

    async school(
        schoolWhereUniqueInput: Prisma.SchoolWhereUniqueInput,
    ): Promise<School | null> {
        return this.prisma.school.findUnique({
            where: schoolWhereUniqueInput,
        });
    }

    async schools(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.SchoolWhereUniqueInput;
        where?: Prisma.SchoolWhereInput;
        orderBy?: Prisma.SchoolOrderByWithRelationInput;
    }): Promise<School[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.school.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createSchool(data: Prisma.SchoolCreateInput): Promise<School> {
        return this.prisma.school.create({
            data,
        });
    }

    async updateSchool(params: {
        where: Prisma.SchoolWhereUniqueInput;
        data: Prisma.SchoolUpdateInput;
    }): Promise<School> {
        const { where, data } = params;
        return this.prisma.school.update({
            data,
            where,
        });
    }
    
    async deleteSchool(where: Prisma.SchoolWhereUniqueInput): Promise<School> {
        return this.prisma.school.delete({
            where,
        });
    }

    async findAllSchools() {
        return this.prisma.school.findMany();
    }
}