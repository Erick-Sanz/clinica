import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalLogger } from './loggers/logger';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalLogger = app.get(GlobalLogger);

  globalLogger.infoLog({ message: 'Application is starting...' });

  const config = new DocumentBuilder()
    .setTitle('Clinica')
    .setDescription('API de la clinica')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

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
