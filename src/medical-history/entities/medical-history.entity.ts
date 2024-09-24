import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Patient } from 'src/patients/entities/patient.entity';

@Schema({ timestamps: true })
export class MedicalHistory {
  _id: MongooseSchema.Types.ObjectId;
  @Prop({
    trim: true,
    type: MongooseSchema.Types.ObjectId,
    ref: Patient.name,
  })
  patientId: MongooseSchema.Types.ObjectId;
  @Prop({
    type: String,
    trim: true,
  })
  status: string;
  @Prop({
    type: String,
    trim: true,
  })
  changes: string;
  @Prop({
    trim: true,
    type: String,
  })
  observations: string;
  @Prop({
    trim: true,
    type: [String],
  })
  treatments: string[];
  @Prop({
    trim: true,
    type: [String],
  })
  medicalInterventions: string[];
  @Prop({
    trim: true,
    type: [String],
  })
  references: string[];
  @Prop({
    trim: true,
    type: [String],
  })
  adverseReactions: string[];
  @Prop({
    trim: true,
    type: [String],
  })
  testResult: string[];
  @Prop({
    type: Boolean,
    index: true,
    default: false,
  })
  isDeleted: Boolean;
  @Prop({
    type: Date,
  })
  createdAt: Date;
  @Prop({
    type: Date,
  })
  uddatedAt: Date;
}

export const SchemaMedicalHistory =
  SchemaFactory.createForClass(MedicalHistory);
