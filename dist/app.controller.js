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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const school_service_1 = require("./school.service");
const event_service_1 = require("./event.service");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService, studentService, schoolService, eventService) {
        this.appService = appService;
        this.studentService = studentService;
        this.schoolService = schoolService;
        this.eventService = eventService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async createStudent(studentData) {
        return this.studentService.createStudent(studentData);
    }
    async createSchool(schoolData) {
        return this.schoolService.createSchool(schoolData);
    }
    async createEvent(eventData) {
        return this.eventService.createEvent(eventData);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('student'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Post)('school'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createSchool", null);
__decorate([
    (0, common_1.Post)('event'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createEvent", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        student_service_1.StudentService,
        school_service_1.SchoolService,
        event_service_1.EventService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map