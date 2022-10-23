import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Book extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  writer: string;

}

export const BookSchema = SchemaFactory.createForClass(Book);
