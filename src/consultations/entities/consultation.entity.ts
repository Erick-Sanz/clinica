import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Consultation {
  _id: MongooseSchema.Types.ObjectId;
  @Prop({
    trim: true,
    type: MongooseSchema.Types.ObjectId,
    ref: 'Patient',
  })
  patientId: MongooseSchema.Types.ObjectId;
  @Prop({
    trim: true,
    type: MongooseSchema.Types.ObjectId,
    ref: 'Doctor',
  })
  doctorId: MongooseSchema.Types.ObjectId;
  @Prop({
    type: String,
    trim: true,
  })
  reason: string;
  @Prop({
    type: String,
    trim: true,
  })
  diagnosis: string;
  @Prop({
    type: [String],
    trim: true,
  })
  treatment: string[];
  @Prop({
    type: Date,
    trim: true,
  })
  followUpDate: Date;
  @Prop({
    type: Number,
  })
  total: number;
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

export const ConsultationSchema = SchemaFactory.createForClass(Consultation);
