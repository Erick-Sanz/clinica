import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './entities/patient.entity';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const { phoneNumber, email } = createPatientDto;
    const patient = await this.patientModel.findOne(
      {
        $or: [{ email }, { phoneNumber }],
      },
      { email: 1, phoneNumber: 1 },
    );
    if (patient?.email === email) {
      throw new ConflictException(
        `The email: ${patient.email} is already in use`,
      );
    }
    if (patient?.phoneNumber === phoneNumber) {
      throw new ConflictException(
        `The phone number: ${patient.phoneNumber} is already in use`,
      );
    }
    return await this.patientModel.create(createPatientDto);
  }

  async findAll(pagitinDto: PaginationDto) {
    const { skip, limit } = pagitinDto;

    return await this.patientModel
      .find({ isDeleted: false })
      .skip(skip)
      .limit(limit)
      .lean();
  }

  async findOne(id: string) {
    const patient = await this.patientModel.findById(id);
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return patient;
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    const patient = await this.patientModel.findByIdAndUpdate(
      id,
      updatePatientDto,
    );
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return patient;
  }

  async remove(id: string) {
    const patient = await this.patientModel.findByIdAndUpdate(id, {
      isDeleted: true,
    });
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return patient;
  }
}
