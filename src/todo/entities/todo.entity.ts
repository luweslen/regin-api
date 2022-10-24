import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  done: boolean;
}

export type TodoDocument = Todo & Document;

export const TodoSchema = SchemaFactory.createForClass(Todo);
