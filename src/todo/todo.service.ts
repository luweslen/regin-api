import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private TodoModel: Model<TodoDocument>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.TodoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.TodoModel.find().exec();
  }

  findByDone(done: boolean) {
    return this.TodoModel.findOne({ done });
  }

  findOne(id: string) {
    return this.TodoModel.findOne({ id });
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.TodoModel.findByIdAndUpdate(
      id,
      { $set: updateTodoDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.TodoModel.deleteOne({ _id: id }).exec();
  }
}
