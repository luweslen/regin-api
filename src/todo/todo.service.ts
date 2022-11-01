import { Injectable } from '@nestjs/common';
import { Todo, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({ data });
  }

  async findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  findByDone(done: boolean) {
    return this.prisma.todo.findUnique({
      where: {},
      select: {
        done,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  update(id: string, data: Prisma.TodoUpdateArgs) {
    return this.prisma.todo.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
