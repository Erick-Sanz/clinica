import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalLogger } from './loggers/logger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalLogger = app.get(GlobalLogger);
  globalLogger.infoLog({ message: 'Application is starting...' });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(8000);
  globalLogger.infoLog({
    message: `Application is running on: ${await app.getUrl()}`,
  });
}
bootstrap();
