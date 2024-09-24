import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.doctorsService.findAll(paginationDto);
  }

  @Get('availability')
  unifySchedules() {
    return this.doctorsService.unifySchedules();
  }

  @Get('availability/withFormat')
  unifySchedulesWithFormat() {
    return this.doctorsService.unifySchedulesWithFormat();
  }
}
