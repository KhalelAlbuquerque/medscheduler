import { Controller, Post, UploadedFile, UseInterceptors, Logger } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/config/multer';

@Controller('image')
export class ImageController {
  private readonly logger = new Logger(ImageController.name);

  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    // this.logger.log('Received file:', file);

    if (!file || !file.buffer) {
      this.logger.error('No file or file buffer is empty');
      return { error: 'No file uploaded or file buffer is empty' };
    } 

    try {
      const url = await this.imageService.uploadImage(file);
      return { url };
    } catch (error) {
      this.logger.error('Error uploading image:', error.message);
      return { error: error.message };
    }
  }
}
