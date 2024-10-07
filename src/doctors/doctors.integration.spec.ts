import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Doctors (integration)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/doctors (GET)', async () => {
    const response = await request(app.getHttpServer()).get(
      '/doctors?skip=0&limit=10',
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('/doctors (POST)', async () => {
    const doctor = {
      name: '    User Testing    ',
      position: 'Doctor',
    };

    const doctorWithTrim = {
      name: 'User Testing',
      position: 'Doctor',
    };

    const response = await request(app.getHttpServer())
      .post('/doctors')
      .send(doctor);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      ...doctorWithTrim,
      isDeleted: false,
    });
    expect(response.body).toHaveProperty('_id');
    expect(response.body._id).toMatch(/^[a-f\d]{24}$/i);
  });

  it('/doctors validate (POST)', async () => {
    const doctor = {
      name: '',
      position: '',
    };

    const response = await request(app.getHttpServer())
      .post('/doctors')
      .send(doctor);
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      message: [
        'name must be longer than or equal to 3 characters',
        'The name must not contain special characters',
        'name should not be empty',
        'position must be longer than or equal to 3 characters',
        'The position must not contain special characters',
        'position should not be empty',
      ],
      error: 'Bad Request',
      statusCode: 400,
    });
  });

  it('/doctors bodyEmpty (POST)', async () => {
    const doctor = {};
    const response = await request(app.getHttpServer())
      .post('/doctors')
      .send(doctor);
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: 'El body de la solicitud no puede estar vacío',
    });
  });

  it('/doctors update (PATCH)', async () => {
    const doctor = {
      name: 'NameEdit',
      position: 'PositionEdit',
    };
    const response = await request(app.getHttpServer())
      .patch('/doctors/66f338832f9fad87c6b3df53')
      .send(doctor);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      ...doctor,
      isDeleted: false,
      _id: '66f338832f9fad87c6b3df53',
    });
  });
});
