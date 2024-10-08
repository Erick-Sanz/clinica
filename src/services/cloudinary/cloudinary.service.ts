import { ConflictException, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { TestResult } from '../../medical-history/entities/medical-history.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<TestResult> {
    const base64String = file.buffer.toString('base64');
    const base64Image = `data:${file.mimetype};base64,${base64String}`;
    try {
      const result = await cloudinary.uploader.upload(base64Image, {
        folder: 'clinica',
        public_id: uuidv4(),
        resource_type: 'auto',
      });
      return { secure_url: result.secure_url, public_id: result.public_id };
    } catch (error) {
      throw new ConflictException('Error al subir los archivos');
    }
  }

  async uploadFiles(files: Array<Express.Multer.File>) {
    const promises = files.map((file) => {
      return this.uploadFile(file);
    });
    const results = await Promise.all(promises);
    return results;
  }

  async deleteFile(id: string) {
    try {
      await cloudinary.uploader.destroy(id);
    } catch (error) {
      throw new ConflictException('Error al eliminar el archivo');
    }
  }
}
