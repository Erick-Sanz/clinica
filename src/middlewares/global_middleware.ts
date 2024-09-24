import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as multer from 'multer';
import { GlobalLogger } from 'src/loggers/logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private globalLogger: GlobalLogger) {}
  private upload = multer().any();

  use(req: Request, res: Response, next: NextFunction) {
    this.upload(req, res, (err) => {
      if (err) {
        this.globalLogger.errorLog({
          message: `Error processing form data: ${err.message}`,
        });
        throw new BadRequestException('Error processing form data');
      }

      if (req.method === 'POST' || req.method === 'PATCH') {
        if (!req.body || Object.keys(req.body).length === 0) {
          this.globalLogger.errorLog({
            message: `POST request came with an empty body`,
          });
          throw new BadRequestException('The request body cannot be empty');
        }
      }
      next();
    });
  }
}
