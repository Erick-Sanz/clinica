import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { MongoId } from '../common/dto/id-mongo';
import { PaginationDto } from '../common/dto/pagination.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { medicalHistoriesFiles } from './files-rules/filesRule';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';

@Controller('medical-history')
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo historial medico' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Datos del historial medico',
    type: CreateMedicalHistoryDto,
    required: true,
  })
  @UseInterceptors(FilesInterceptor('files', 10, medicalHistoriesFiles))
  create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createMedicalHistoryDto: CreateMedicalHistoryDto,
  ) {
    return this.medicalHistoryService.create(createMedicalHistoryDto, files);
  }

  @Get('findAllByPatient/:id')
  @ApiOperation({ summary: 'Obtener todos los historiales de un paciente' })
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
  @ApiOperation({ summary: 'Obtener un historial medico' })
  findOne(@Param() params: MongoId) {
    return this.medicalHistoryService.findOne(params.id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un historial medico' })
  remove(@Param() params: MongoId) {
    return this.medicalHistoryService.remove(params.id);
  }
}
