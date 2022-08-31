import { PrismaService } from './prisma.service';
import { Prisma, Event } from '@prisma/client';
export declare class EventService {
    private prisma;
    constructor(prisma: PrismaService);
    event(eventWhereUniqueInput: Prisma.EventWhereUniqueInput): Promise<Event | null>;
    events(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EventWhereUniqueInput;
        where?: Prisma.EventWhereInput;
        orderBy?: Prisma.EventOrderByWithRelationInput;
    }): Promise<Event[]>;
    createEvent(data: Prisma.EventCreateInput): Promise<Event>;
    updateEvent(params: {
        where: Prisma.EventWhereUniqueInput;
        data: Prisma.EventUpdateInput;
    }): Promise<Event>;
    deleteEvent(where: Prisma.EventWhereUniqueInput): Promise<Event>;
    findAllEvents(): Promise<Event[]>;
}
