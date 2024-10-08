import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { Model } from 'mongoose';
import { Doctor } from './entities/doctor.entity';
import { getModelToken } from '@nestjs/mongoose';

describe('PatientsSevice', () => {
  let model: Model<Doctor>;
  let doctorsService: DoctorsService;
  const mockDoctor = {
    '2022-05-20T00:00:00Z': {
      slots: {
        '2022-05-20T09:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-20T10:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-20T11:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-20T12:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-20T13:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-20T14:00:00Z': {
          doctorIds: ['46', '47'],
        },
        '2022-05-20T15:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-20T16:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-20T17:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-20T18:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-20T19:00:00Z': {
          doctorIds: ['47'],
        },
      },
    },
    '2022-05-21T00:00:00Z': {
      slots: {
        '2022-05-21T09:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-21T10:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-21T11:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-21T12:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-21T13:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-21T14:00:00Z': {
          doctorIds: ['46', '47'],
        },
        '2022-05-21T15:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-21T16:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-21T17:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-21T18:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-21T19:00:00Z': {
          doctorIds: ['47'],
        },
      },
    },
    '2022-05-22T00:00:00Z': {
      slots: {
        '2022-05-22T14:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-22T15:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-22T16:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-22T17:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-22T18:00:00Z': {
          doctorIds: ['47'],
        },
        '2022-05-22T19:00:00Z': {
          doctorIds: ['47'],
        },
      },
    },
    '2022-05-23T00:00:00Z': {
      slots: {
        '2022-05-23T14:00:00Z': {
          doctorIds: ['45', '46'],
        },
        '2022-05-23T15:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-23T16:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-23T17:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-23T18:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-23T19:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-23T09:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-23T10:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-23T11:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-23T12:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-23T13:00:00Z': {
          doctorIds: ['46'],
        },
      },
    },
    '2022-05-24T00:00:00Z': {
      slots: {
        '2022-05-24T14:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-24T15:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-24T16:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-24T17:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-24T18:00:00Z': {
          doctorIds: ['45'],
        },
        '2022-05-24T19:00:00Z': {
          doctorIds: ['45'],
        },
      },
    },
    '2022-05-25T00:00:00Z': {
      slots: {
        '2022-05-25T14:00:00Z': {
          doctorIds: ['45', '47'],
        },
        '2022-05-25T15:00:00Z': {
          doctorIds: ['45', '47'],
        },
        '2022-05-25T16:00:00Z': {
          doctorIds: ['45', '47'],
        },
        '2022-05-25T17:00:00Z': {
          doctorIds: ['45', '47'],
        },
        '2022-05-25T18:00:00Z': {
          doctorIds: ['45', '47'],
        },
        '2022-05-25T19:00:00Z': {
          doctorIds: ['45', '47'],
        },
      },
    },
    '2022-05-26T00:00:00Z': {
      slots: {
        '2022-05-26T09:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-26T10:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-26T11:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-26T12:00:00Z': {
          doctorIds: ['46'],
        },
        '2022-05-26T13:00:00Z': {
          doctorIds: ['46'],
        },
      },
    },
    '2022-05-27T00:00:00Z': {
      slots: {
        '2022-05-27T14:00:00Z': {
          doctorIds: ['45', '46', '47'],
        },
        '2022-05-27T16:00:00Z': {
          doctorIds: ['45', '46', '47'],
        },
        '2022-05-27T19:00:00Z': {
          doctorIds: ['45', '46', '47'],
        },
      },
    },
  };

  const mockRequestSchedules = {
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

  const mockDoctorService = {
    find: jest.fn(),
    unifySchedules: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DoctorsService,
        {
          provide: getModelToken(Doctor.name),
          useValue: mockDoctorService,
        },
      ],
    }).compile();

    doctorsService = module.get<DoctorsService>(DoctorsService);
    model = module.get<Model<Doctor>>(getModelToken(Doctor.name));
  });

  describe('unifyAllSchedules', () => {
    it('should return a list of unifySchedules', async () => {
      const result = doctorsService.unifyAllSchedules(mockRequestSchedules);

      expect(result).toEqual(mockDoctor);
    });
  });
});
