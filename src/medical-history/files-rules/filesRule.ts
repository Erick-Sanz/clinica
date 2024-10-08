import { BadRequestException } from '@nestjs/common';

export const medicalHistoriesFiles = {
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
