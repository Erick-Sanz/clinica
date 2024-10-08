import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalHistory } from './entities/medical-history.entity';
import { Model } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Patient } from '../patients/entities/patient.entity';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';

@Injectable()
export class MedicalHistoryService {
  constructor(
    @InjectModel(MedicalHistory.name)
    private readonly medicalHistoryModel: Model<MedicalHistory>,
    @InjectModel(Patient.name)
    private readonly patientModel: Model<Patient>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(
    createMedicalHistoryDto: CreateMedicalHistoryDto,
    files: Array<Express.Multer.File>,
  ) {
    const { patientId } = createMedicalHistoryDto;
    const patientFound = await this.patientModel.findById(patientId);
    if (!patientFound) {
      throw new ConflictException('The patient does not exist');
    }
    const testResult = await this.cloudinaryService.uploadFiles(files);
    return await this.medicalHistoryModel.create({
      ...createMedicalHistoryDto,
      testResult,
    });
  }

  async findAllByPatient(patientId: string, paginationDto: PaginationDto) {
    const { skip, limit } = paginationDto;
    return await this.medicalHistoryModel
      .find({
        patientId,
        isDeleted: false,
      })
      .skip(skip)
      .limit(limit)
      .lean();
  }

  async findOne(id: string) {
    const medicalHistory = await this.medicalHistoryModel.findById(id);
    if (!medicalHistory) {
      throw new NotFoundException('Not found medical history');
    }
    return medicalHistory;
  }

  async remove(id: string) {
    const medicalHistory = await this.medicalHistoryModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
    if (!medicalHistory) {
      throw new NotFoundException('Not found medical history');
    }
    return medicalHistory;
  }
}
