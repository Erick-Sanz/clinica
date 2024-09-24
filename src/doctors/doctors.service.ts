import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from './entities/doctor.entity';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { SchedulesInterface } from './interfaces/schedules';
import { Query } from 'express-serve-static-core';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor.name)
    private readonly doctorModel: Model<Doctor>,
  ) {}

  getSchedules(): SchedulesInterface {
    return {
      schedules: [
        {
          slotdates: [
            {
              date: '2022-05-20T00:00:00Z',
            },
            {
              date: '2022-05-21T00:00:00Z',
            },
            {
              date: '2022-05-22T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T15:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T17:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T18:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T19:00:00Z',
                },
              ],
              date: '2022-05-23T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-24T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-24T15:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-24T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-24T17:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-24T18:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-24T19:00:00Z',
                },
              ],
              date: '2022-05-24T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T15:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T17:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T18:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T19:00:00Z',
                },
              ],
              date: '2022-05-25T00:00:00Z',
            },
            {
              date: '2022-05-26T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T19:00:00Z',
                },
              ],
              date: '2022-05-27T00:00:00Z',
            },
          ],
          idDoctor: '45',
          idClinic: '23578',
        },
        {
          slotdates: [
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T09:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T10:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T11:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T12:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T13:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T14:00:00Z',
                },
              ],
              date: '2022-05-20T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T09:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T10:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T11:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T12:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T13:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T14:00:00Z',
                },
              ],
              date: '2022-05-21T00:00:00Z',
            },
            {
              date: '2022-05-22T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T09:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T10:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T11:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T12:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T13:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-23T14:00:00Z',
                },
              ],
              date: '2022-05-23T00:00:00Z',
            },
            {
              date: '2022-05-24T00:00:00Z',
            },
            {
              date: '2022-05-25T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-26T09:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-26T10:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-26T11:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-26T12:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-26T13:00:00Z',
                },
              ],
              date: '2022-05-26T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T19:00:00Z',
                },
              ],
              date: '2022-05-27T00:00:00Z',
            },
          ],
          idDoctor: '46',
          idClinic: '23578',
        },
        {
          slotdates: [
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T15:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T17:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T18:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-20T19:00:00Z',
                },
              ],
              date: '2022-05-20T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T15:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T17:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T18:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-21T19:00:00Z',
                },
              ],
              date: '2022-05-21T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-22T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-22T15:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-22T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-22T17:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-22T18:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-22T19:00:00Z',
                },
              ],
              date: '2022-05-22T00:00:00Z',
            },
            {
              date: '2022-05-23T00:00:00Z',
            },
            {
              date: '2022-05-24T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T15:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T17:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T18:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-25T19:00:00Z',
                },
              ],
              date: '2022-05-25T00:00:00Z',
            },
            {
              date: '2022-05-26T00:00:00Z',
            },
            {
              slots: [
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T14:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T16:00:00Z',
                },
                {
                  sourceEvent: '23734149',
                  dateTime: '2022-05-27T19:00:00Z',
                },
              ],
              date: '2022-05-27T00:00:00Z',
            },
          ],
          idDoctor: '47',
          idClinic: '23578',
        },
      ],
    };
  }
  test(query: Query) {
    const qu = query;
  }
  unifySchedules() {
    const schedules = this.getSchedules();
    return this.unifyAllSchedules(schedules);
  }

  unifyAllSchedules(unconnectedSchedules) {
    const unifiedSchedules = {};
    const { schedules } = unconnectedSchedules;
    schedules.forEach(({ slotdates, idDoctor }) => {
      slotdates.forEach(({ date, slots = [] }) => {
        const scheduleForDate = (unifiedSchedules[date] ??= { slots: {} });

        slots.forEach(({ dateTime }) => {
          const slot = (scheduleForDate.slots[dateTime] ??= { doctorIds: [] });
          slot.doctorIds.push(idDoctor);
        });
      });
    });

    return unifiedSchedules;
  }

  async create(createDoctorDto: CreateDoctorDto) {
    return await this.doctorModel.create(createDoctorDto);
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, skip } = paginationDto;
    return await this.doctorModel
      .find({ isDeleted: false })
      .skip(skip)
      .limit(limit)
      .lean();
  }

  unifySchedulesWithFormat() {
    const slotsResponse: SlotsStructure = this.unifySchedules();
    return Object.entries(slotsResponse).map(([date, { slots }]) => ({
      date,
      slots: Object.entries(slots).map(([dateTime, { doctorIds }]) => ({
        dateTime,
        doctorIds,
      })),
    }));
  }
}
