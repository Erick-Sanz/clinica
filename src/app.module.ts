import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalLoggerModule } from './loggers/logger.module';
import { LoggerMiddleware } from './middlewares/global_middleware';
import { PatientsModule } from './patients/patients.module';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { CommonModule } from './common/common.module';
import { DoctorsModule } from './doctors/doctors.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    CommonModule,
    GlobalLoggerModule,
    PatientsModule,
    MedicalHistoryModule,
    ConsultationsModule,
    DoctorsModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'medical-history/:id', method: RequestMethod.PATCH },
        { path: 'medical-history', method: RequestMethod.POST },
      )
      .forRoutes('*');
  }
}
