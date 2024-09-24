import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { MongoId } from 'src/common/dto/id-mongo';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { medicalHistoriesFiles } from './files-rules/filesRule';

@Controller('medical-history')
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 10, medicalHistoriesFiles))
  create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createMedicalHistoryDto: CreateMedicalHistoryDto,
  ) {
    return this.medicalHistoryService.create(createMedicalHistoryDto, files);
  }

  @Get('findAllByPatient/:id')
  findAllByPatient(
    @Param() params: MongoId,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.medicalHistoryService.findAllByPatient(
      params.id,
      paginationDto,
    );
  }

  @Get(':id')
  findOne(@Param() params: MongoId) {
    return this.medicalHistoryService.findOne(params.id);
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('files', 10, medicalHistoriesFiles))
  update(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Param() params: MongoId,
    @Body() updateMedicalHistoryDto: UpdateMedicalHistoryDto,
  ) {
    return this.medicalHistoryService.update(
      params.id,
      updateMedicalHistoryDto,
      files,
    );
  }

  @Delete(':id')
  remove(@Param() params: MongoId) {
    return this.medicalHistoryService.remove(params.id);
  }
}
