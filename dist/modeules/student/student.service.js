"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/PrismaService");
let StudentService = class StudentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const studentExists = await this.prisma.student.findFirst({
            where: {
                cpf: data.cpf
            }
        });
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
    async update(id, data) {
        const studentExists = await this.prisma.student.findUnique({
            where: {
                id
            }
        });
        if (!studentExists) {
            throw new Error('Student not exists');
        }
        return await this.prisma.student.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        const studentExists = await this.prisma.student.findUnique({
            where: {
                id
            }
        });
        if (!studentExists) {
            throw new Error('Student not exists');
        }
        return await this.prisma.student.delete({
            where: { id },
        });
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map