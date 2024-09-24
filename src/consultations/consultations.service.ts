import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Consultation } from './entities/consultation.entity';
import { Model } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Doctor } from '../doctors/entities/doctor.entity';
import { Patient } from '../patients/entities/patient.entity';

@Injectable()
export class ConsultationsService {
  constructor(
    @InjectModel(Consultation.name)
    private readonly consultationModel: Model<Consultation>,
    @InjectModel(Doctor.name)
    private readonly doctorModel: Model<Doctor>,
    @InjectModel(Patient.name)
    private readonly patientModel: Model<Patient>,
  ) {}

  async create(createConsultationDto: CreateConsultationDto) {
    const { doctorId, patientId } = createConsultationDto;
    const doctor = await this.doctorModel.findById(doctorId);
    if (!doctor) {
      throw new ConflictException('the doctor does not exist');
    }
    const patient = await this.patientModel.findById(patientId);
    if (!patient) {
      throw new ConflictException('the patient does not exist');
    }
    return await this.consultationModel.create(createConsultationDto);
  }

  async getConsultationsByPatientId(id: string, paginationDto: PaginationDto) {
    const { skip, limit } = paginationDto;
    return await this.consultationModel
      .find({
        patientId: id,
        isDeleted: false,
      })
      .skip(skip)
      .limit(limit)
      .lean();
  }

  async updateConsultation(
    id: string,
    updateConsultationDto: UpdateConsultationDto,
  ) {
    const consultation = await this.consultationModel.findOneAndUpdate(
      { _id: id },
      updateConsultationDto,
      { new: true },
    );
    if (!consultation) {
      throw new NotFoundException('the consultation does not exist');
    }
    return consultation;
  }

  async deleteConsultation(id: string) {
    const consultation = await this.consultationModel.findOneAndUpdate(
      { _id: id },
      { isDeleted: true },
      { new: true },
    );
    if (!consultation) {
      throw new NotFoundException('the consultation does not exist');
    }
    return consultation;
  }
}
