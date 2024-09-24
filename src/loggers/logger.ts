import { Injectable } from '@nestjs/common';
const winston = require('winston');

@Injectable()
export class GlobalLogger {
  private logger;
  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      defaultMeta: { service: 'clinica-app' },
      timestamp: true,
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    });
  }
  errorLog({ message }) {
    this.logger.log({
      level: 'error',
      message,
    });
  }
  infoLog({ message }) {
    this.logger.log({
      level: 'info',
      message,
    });
  }
  customLog({ message }) {
    this.logger.log({
      level: 'info',
      message,
    });
  }
}
