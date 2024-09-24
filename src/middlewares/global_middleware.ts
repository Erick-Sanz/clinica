import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { GlobalLogger } from '../loggers/logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private globalLogger: GlobalLogger) {}

  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST' || req.method === 'PATCH') {
      if (!req.body || Object.keys(req.body).length === 0) {
        throw new HttpException(
          'El body de la solicitud no puede estar vacío',
          HttpStatus.BAD_REQUEST,
        );
      }
      this.globalLogger.errorLog({
        message: `${req.method} request body: ${JSON.stringify(req.body)}`,
      });
    }
    next();
  }
}
