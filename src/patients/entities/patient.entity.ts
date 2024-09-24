import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Gender } from '../enums/gender';

export class Address {
  @Prop({
    type: String,
    trim: true,
  })
  street: string;
  @Prop({
    type: String,
    trim: true,
  })
  number: string;
  @Prop({
    type: String,
    trim: true,
  })
  postalCode: string;
  @Prop({
    type: String,
    trim: true,
  })
  state: string;
  @Prop({
    type: String,
    trim: true,
  })
  neighborhood: string;
}

@Schema({ timestamps: true })
export class Patient {
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
  paternalSurname: string;
  @Prop({
    type: String,
    trim: true,
  })
  maternalSurname: string;
  @Prop({
    type: String,
    trim: true,
    unique: true,
    index: true,
  })
  phoneNumber: string;
  @Prop({
    type: String,
    trim: true,
    unique: true,
    index: true,
  })
  email: string;
  @Prop({
    type: String,
    trim: true,
    enum: Gender,
  })
  gender: Gender;
  @Prop({
    type: Date,
  })
  dateOfBirth: Date;
  @Prop({
    type: Address,
  })
  address: Address;
  @Prop({
    type: Boolean,
    default: false,
    index: true,
  })
  isDeleted: boolean;
  @Prop({
    type: Boolean,
    default: true,
    index: true,
  })
  isNewUser: boolean;
  @Prop({
    type: Date,
  })
  createdAt: Date;
  @Prop({
    type: Date,
  })
  uddatedAt: Date;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
