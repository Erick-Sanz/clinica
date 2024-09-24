import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const medicalHistoriesFiles = {
  storage: diskStorage({
    destination: '/tmp/uploads/',
    filename: (req, file, callback) => {
      const fileExtName = extname(file.originalname);
      callback(null, `${uuidv4()}${fileExtName}`);
    },
  }),

  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp|pdf)$/)) {
      return callback(
        new BadRequestException(
          'Only image files (jpg, jpeg, png, webp, pdf) are allowed!',
        ),
        false,
      );
    }
    callback(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
};
