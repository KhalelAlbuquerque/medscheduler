import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorSchema } from './schemas/doctor.schema';
import { ImageService } from 'src/image/image.service';
import { FirebaseService } from 'src/config/firebase.config';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }])],
  controllers: [DoctorController],
  providers: [DoctorService, ImageService, FirebaseService],
  exports: [DoctorModule, DoctorService, MongooseModule]
})
export class DoctorModule {}
