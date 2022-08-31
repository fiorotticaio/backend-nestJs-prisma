import { PrismaService } from './prisma.service';
import { Prisma, School } from '@prisma/client';
export declare class SchoolService {
    private prisma;
    constructor(prisma: PrismaService);
    school(schoolWhereUniqueInput: Prisma.SchoolWhereUniqueInput): Promise<School | null>;
    schools(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.SchoolWhereUniqueInput;
        where?: Prisma.SchoolWhereInput;
        orderBy?: Prisma.SchoolOrderByWithRelationInput;
    }): Promise<School[]>;
    createSchool(data: Prisma.SchoolCreateInput): Promise<School>;
    updateSchool(params: {
        where: Prisma.SchoolWhereUniqueInput;
        data: Prisma.SchoolUpdateInput;
    }): Promise<School>;
    deleteSchool(where: Prisma.SchoolWhereUniqueInput): Promise<School>;
    findAllSchools(): Promise<School[]>;
}
