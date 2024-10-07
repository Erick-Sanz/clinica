import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { MongoId } from '../common/dto/id-mongo';
import { ApiConsumes, ApiOperation } from '@nestjs/swagger';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo paciente' })
  @ApiConsumes('application/json')
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.patientsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param() params: MongoId) {
    return this.patientsService.findOne(params.id);
  }

  @Patch(':id')
  update(@Param() params: MongoId, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(params.id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param() params: MongoId) {
    return this.patientsService.remove(params.id);
  }
}
