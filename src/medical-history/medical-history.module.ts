import { Module } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { MedicalHistoryController } from './medical-history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalHistory,
  SchemaMedicalHistory,
} from './entities/medical-history.entity';
import { Patient, PatientSchema } from '../patients/entities/patient.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalHistory.name, schema: SchemaMedicalHistory },
      { name: Patient.name, schema: PatientSchema },
    ]),
  ],
  controllers: [MedicalHistoryController],
  providers: [MedicalHistoryService],
  exports: [MedicalHistoryService],
})
export class MedicalHistoryModule {}
