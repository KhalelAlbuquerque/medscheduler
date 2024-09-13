import { Injectable, Logger } from '@nestjs/common';
import { FirebaseService } from '../config/firebase.config';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ImageService {
  private readonly logger = new Logger(ImageService.name);

  constructor(private firebaseService: FirebaseService) {}

  async uploadImage(file: Express.Multer.File): Promise<string> {
    const bucket = this.firebaseService.getBucket();
    const fileName = `${uuidv4()}_${file.originalname}`;

    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (err) => {
        this.logger.error(`Error uploading file: ${err.message}`);
        reject(`Error on upload: ${err.message}`);
      });

      blobStream.on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        this.logger.log(`File uploaded successfully: ${publicUrl}`);
        resolve(publicUrl);
      });

      if (file.buffer) {
        this.logger.log(`File buffer size: ${file.buffer.length}`);
        blobStream.end(file.buffer);
      } else {
        this.logger.error('File buffer is empty');
        reject('Error: File buffer is empty');
      }
    });
  }
}
