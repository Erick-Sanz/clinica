import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalHistory } from './entities/medical-history.entity';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Patient } from 'src/patients/entities/patient.entity';
import { join } from 'path';

@Injectable()
export class MedicalHistoryService {
  private URL_DOCS;
  constructor(
    @InjectModel(MedicalHistory.name)
    private readonly medicalHistoryModel: Model<MedicalHistory>,
    @InjectModel(Patient.name)
    private readonly patientModel: Model<Patient>,
  ) {
    this.URL_DOCS = process.env.URL_DOCS;
  }

  async create(
    createMedicalHistoryDto: CreateMedicalHistoryDto,
    files: Array<Express.Multer.File>,
  ) {
    const testResult = files.map((file) => {
      return `${this.URL_DOCS}${file.filename}`;
    });
    const { patientId } = createMedicalHistoryDto;
    const patientFound = await this.patientModel.findById(patientId);
    if (!patientFound) {
      throw new ConflictException('The patient does not exist');
    }
    return await this.medicalHistoryModel.create({
      ...createMedicalHistoryDto,
      testResult,
    });
  }

  async findAllByPatient(patientId: string, paginationDto: PaginationDto) {
    const { skip, limit } = paginationDto;
    return await this.medicalHistoryModel
      .find({
        patient: patientId,
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

  async update(
    id: string,
    updateMedicalHistoryDto: UpdateMedicalHistoryDto,
    files: Array<Express.Multer.File>,
  ) {
    const beforeMedicalHistory = await this.medicalHistoryModel.findById(id, {
      testResult: 1,
    });
    if (!beforeMedicalHistory) {
      throw new NotFoundException('Not found medical history');
    }
    let testResult = updateMedicalHistoryDto?.testResult
      ? updateMedicalHistoryDto.testResult
      : [];
    if (files?.length === 0 && !updateMedicalHistoryDto?.testResult) {
      testResult = beforeMedicalHistory.testResult;
    }
    if (testResult) {
      const deletedFiles = beforeMedicalHistory.testResult.filter(
        (result) => !testResult.includes(result),
      );
      this.removeFiles(deletedFiles);
    }
    if (files?.length > 0) {
      const newFiles = files.map((file) => {
        return `${this.URL_DOCS}${file.filename}`;
      });
      testResult.push(...newFiles);
    }
    const medicalHistory = await this.medicalHistoryModel.findByIdAndUpdate(
      id,
      { ...updateMedicalHistoryDto, testResult },
      { new: true },
    );
    return medicalHistory;
  }

  removeFiles(fileNames: string[]) {
    // fileNames.forEach((fileName) => {
    //   const filePath = join(
    //     process.cwd(),
    //     'uploads',
    //     fileName.split('/').pop(),
    //   );
    //   if (fs.existsSync(filePath)) {
    //     fs.unlink(filePath, (err) => {
    //       if (err) {
    //         throw new BadRequestException('Error deleting file');
    //       }
    //     });
    //   }
    // });
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
