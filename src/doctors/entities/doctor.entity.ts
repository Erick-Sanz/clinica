import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Doctor {
  _id: MongooseSchema.Types.ObjectId;
  @Prop({
    type: String,
    trim: true,
  })
  name: string;
  @Prop({
    type: String,
    trim: true,
  })
  position: string;
  @Prop({
    type: Boolean,
    default: false,
    index: true,
  })
  isDeleted: boolean;
  @Prop({
    type: Date,
  })
  createdAt: Date;
  @Prop({
    type: Date,
  })
  uddatedAt: Date;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
