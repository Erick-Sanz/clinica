import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { MongoId } from 'src/common/dto/id-mongo';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';

@Controller('consultations')
export class ConsultationsController {
  constructor(private readonly consultationsService: ConsultationsService) {}

  @Post()
  create(@Body() createConsultationDto: CreateConsultationDto) {
    return this.consultationsService.create(createConsultationDto);
  }

  @Get('byPatient/:id')
  findAllByPatient(
    @Param() params: MongoId,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.consultationsService.getConsultationsByPatientId(
      params.id,
      paginationDto,
    );
  }

  @Patch(':id')
  updateConsultation(
    @Param() params: MongoId,
    @Body() updateConsultationDto: UpdateConsultationDto,
  ) {
    return this.consultationsService.updateConsultation(
      params.id,
      updateConsultationDto,
    );
  }

  @Delete(':id')
  deleteConsultation(@Param() params: MongoId) {
    return this.consultationsService.deleteConsultation(params.id);
  }
}
